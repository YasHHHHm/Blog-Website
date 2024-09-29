import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome2 BLOG HUB!</b> Discover new Blogs and Write what&apos;s on your Mind.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/mainfeature.png" alt="mainfeature" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle} ><Link href="https://hub-blog.vercel.app/posts/information-creationblog-hub">Information & Creation:(Blog Hub)</Link></h1>
          <p className={styles.postDesc}>An interactive blogging website where user can write, discover and discuss blogs. It offer various genres of topics for the user to choose from ranging from fashion, cultures and coding etc. 
          </p>
          <button className={styles.button}><Link href="https://hub-blog.vercel.app/posts/information-creationblog-hub">Read More</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;