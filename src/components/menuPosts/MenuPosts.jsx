import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPosts = ({posts = [], withImage}) => {
  const sortedPosts = posts.length > 0 ? posts.sort((a, b) => b.views - a.views) : [];

  return (
    <div className={styles.items}>
      {sortedPosts.map(post => (
        <Link href="/" className={styles.item} key={post._id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || ''} alt={post.title || ''} fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={styles.category}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>
              {post.title}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>{data?.user.name} - </span>
              <span className={styles.date}>{data?.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPosts;