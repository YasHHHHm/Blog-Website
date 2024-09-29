"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link} onClick={handleLinkClick}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link} onClick={handleLinkClick}>
            Write
          </Link>
          <span className={styles.link} onClick={() => { signOut(); handleLinkClick(); }}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={handleLinkClick}>Homepage</Link>
          <Link href="/about" onClick={handleLinkClick}>About</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={handleLinkClick}>Login</Link>
          ) : (
            <>
              <Link href="/write" onClick={handleLinkClick}>Write</Link>
              <span className={styles.link} onClick={() => { signOut(); handleLinkClick(); }}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
