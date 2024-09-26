import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
import Featured from '../featured/Featured'
import EditorPick from '../isFeatured/EditorsPick'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}/>



      {/* Category Section */}
      <h2 className={styles.subtitle}>Discover By Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />



      {/* Second Section */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <EditorPick withImage={true}/>
    </div>
  )
}

export default Menu
