import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub , FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Blog Hub" width={50} height={50} />
          <h1 className={styles.logoText}>Blog Hub</h1>
        </div>
        <p className={styles.desc}>
          Blog Hub is an interactive blogging website where user can write, discover and discuss blogs. It offer various genres of topics for the user to choose from ranging from fashion, cultures and coding etc. Discover all new features of Bog Hub and don't fprget to write a blog ;) 
        </p>
        <div className={styles.icon}>
        <a href="https://www.facebook.com/yash.mehra.1257/"> 
        <FaFacebookF size={18} />
        </a>
        <a href="https://www.instagram.com/_.yashmehra._/"> 
        <FiInstagram size={18} />
        </a>
        <a href="https://x.com/Mehra_ji_"> 
        <RiTwitterXLine size={18} />
        </a>
        <a href="https://github.com/YasHHHHm"> 
        <FaGithub size={18} />
        </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link classname={styles.link} href="/">Homepage</Link>
          <Link classname={styles.link} href="/">Blog</Link>
          <Link classname={styles.link} href="/about">About</Link>
          <Link classname={styles.link} href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Topics</span>
          <Link classname={styles.link} href="/blog?cat=style">Style</Link>
          <Link classname={styles.link} href="/blog?cat=fashion">Fashion</Link>
          <Link classname={styles.link} href="/blog?cat=coding">Coding</Link>
          <Link classname={styles.link} href="/blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link classname={styles.link} href="https://www.facebook.com/yash.mehra.1257/">Facebook</Link>
          <Link classname={styles.link} href="https://www.instagram.com/_.yashmehra._/">Instagram</Link>
          <Link classname={styles.link} href="https://x.com/Mehra_ji_">Twitter</Link>
          <Link classname={styles.link} href="https://github.com/YasHHHHm">Github</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
