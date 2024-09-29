"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { ErrorBoundary } from "react-error-boundary";

// Error fallback component
const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [editorValue, setEditorValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }], // Set an empty initial text
    },
  ]);

  // Initialize Slate editor
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);

  // Handle file upload to Firebase
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (!file) return; // Exit if no file to upload

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("File upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    upload();
  }, [file]);

  // Redirect unauthenticated users to home page
  useEffect(() => {
    if (status === "unauthenticated" && router) {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("https://hub-blog.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: editorValue.map((n) => n.children[0].text).join("\n"), // Convert Slate value to plain text
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
    window.location.reload();
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="0">Select category:</option>
          <option value="style">Style</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="culture">Culture</option>
          <option value="travel">Travel</option>
          <option value="coding">Coding</option>
        </select>
        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="Add" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="Upload image" width={16} height={16} />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image src="/external.png" alt="External link" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="Upload video" width={16} height={16} />
              </button>
            </div>
          )}
          <Slate
            editor={editor}
            value={editorValue}
            onChange={(newValue) => {
              if (newValue.length > 0) {
                setEditorValue(newValue);
              }
            }}
          >
            <Editable
              className={styles.textArea}
              placeholder="Tell your story..."
            />
          </Slate>
        </div>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </ErrorBoundary>
  );
};

export default WritePage;
