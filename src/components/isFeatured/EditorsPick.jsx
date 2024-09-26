import { PrismaClient } from '@prisma/client';
import Card from '../card/Card';
import styles from './editorpick.module.css';
import Image from 'next/image';
import Link from 'next/link';

const prisma = new PrismaClient();

const getCategoryStyle = (categoryTitle) => {
  switch (categoryTitle) {
    case 'travel':
      return styles.travel; 
    case 'coding':
      return styles.coding; 
    case 'fashion':
      return styles.fashion; 
    case 'food':
      return styles.food;
    case 'style':
      return styles.style;
    default:
      return ''; 
  }
};

const EditorsPick = async ({ limit = 4, withImage = true }) => {
  const posts = await prisma.post.findMany({
    where: {
      isFeatured: true, 
    },
    include: { cat: true, user: true },
    take: limit,
  });

  return (
    <div className={styles.items}>
      {posts.map((post) => (
        <div className={styles.item} key={post.id}>
          <Link href={`/posts/${post.slug}`} className={styles.item}>
            {withImage && post.img && (
              <div className={styles.imageContainer}>
                <Image src={post.img} alt={post.title} fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
            <span className={`${styles.category} ${getCategoryStyle(post.cat.title)}`}>
                {post.cat.title}
              </span>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>
                  {post.user.name} - 
                </span>
                <span className={styles.date}>
                  {new Date(post.createdAt).toISOString().substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EditorsPick;
