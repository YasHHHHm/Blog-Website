import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { FaGithub , FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";



const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="/"> 
        <FaFacebookF size={25} />
        </a>
        <a href="/"> 
        <FiInstagram size={25} />
        </a>
        <a href="/"> 
        <RiTwitterXLine size={25} />
        </a>
        <a href="/"> 
        <FaGithub size={25} />
        </a>
      </div>
      <div className={styles.logo}>Blog Hub</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;