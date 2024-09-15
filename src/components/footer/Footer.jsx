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
        <a href="/"> 
        <FaFacebookF size={18} />
        </a>
        <a href="/"> 
        <FiInstagram size={18} />
        </a>
        <a href="/"> 
        <RiTwitterXLine size={18} />
        </a>
        <a href="/"> 
        <FaGithub size={18} />
        </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Topics</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
