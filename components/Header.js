import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../styles/Header.module.css'

export default function Header({children}){

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return(
    <section className={styles.main}>
      <Link href="/"><a><h1>Lancaster City Nutrition</h1></a></Link>
      <h2>{children}</h2>
      <nav>
      <button onClick={toggle}
        type="button"
        name="button"
        alt="Site Links">
        Login/Register
      </button>
      <div>
      <Link className={styles.dropdownLink} href="/"><a>login</a></Link>
      <Link className={styles.dropdownLink} href="/"><a>register</a></Link>
      <Link className={styles.dropdownLink} href="#menu"><a>menu</a></Link>
      <Link className={styles.dropdownLink} href="#home"><a>home</a></Link>
      </div>
      </nav>
      <div className={styles.dropdown}
        style={{display:"flex",
          visibility: showMe?"visible":"hidden"}}
        >
        <Link className={styles.dropdownLink} href="/"><a>login</a></Link>
        <Link className={styles.dropdownLink} href="/"><a>register</a></Link>
        <Link className={styles.dropdownLink} href="#menu"><a>menu</a></Link>
        <Link className={styles.dropdownLink} href="#home"><a>home</a></Link>
      </div>
    </section>
  )

}
