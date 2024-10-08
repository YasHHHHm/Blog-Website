"use client"

import styles from "./loginPage.module.css"
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image';
import {FaFacebookF } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Facebook from "next-auth/providers/facebook";

const Page = () => {

  const {data,status} = useSession()

  const router = useRouter();

  if(status === "loading" ){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === "authenticated" ){
    router.push("/")
  }

  console.log(data,status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")}> <Image src="/google.png" alt="google" className={styles.logo} width={20} height={20} /> Sign in with Google</div>
        <div className={styles.socialButton} onClick={()=>signIn("github")}><Image src="/github.png" alt="google" className={styles.logo} width={20} height={20} /> Sign in with Github</div>
        <div className={styles.socialButton} onClick={()=>signIn("facebook")}><FaFacebookF size={20} className={styles.logo} /> Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default Page;
