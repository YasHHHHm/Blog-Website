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
          <Image src="/mainfeature.webp" alt="mainfeature" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle} ><Link href="https://hub-blog.vercel.app/posts/technology-and-culture">Technology and Culture</Link></h1>
          <p className={styles.postDesc}>The effect of technology on culture is multifaceted, with both positive and negative consequences. Technology has transformed the ways in which people create, consume, and share cultural content, leading to new forms of artistic expression, communication, and interaction.
          </p>
          <button className={styles.button}><Link href="https://hub-blog.vercel.app/posts/information-creationblog-hub">Read More</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;