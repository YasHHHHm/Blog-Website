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
          <h1 className={styles.postTitle} ><Link href="http://localhost:3000/posts/information-creationblog-hub">Information & Creation:(Blog Hub)</Link></h1>
          <p className={styles.postDesc}>
            Used Front-End : Next.js/ React.js/ <br />
            <br />

            Used (Backend) : Node.js/ MongoDB/ Prisma-ORM/ Firebase/ <br />
            <br />
            Used (authentication) : Auth.js/ Google-Cloud/ Meta-developer/ GitHub developer/


          </p>
          <button className={styles.button}><Link href="http://localhost:3000/posts/information-creationblog-hub">Read More</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;