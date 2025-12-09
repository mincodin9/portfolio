"use client"

import styles from "../_styles/header.module.css"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return(
    <div className={styles.mainPage}>
      <Link
        href="#home"
        className={styles.mainButton}
      >
        Home
      </Link>
      <Link
        href="#about"
        className={styles.mainButton}
      >
        About
      </Link>
      <Link
        href="#experience"
        className={styles.mainButton}
      >
        Experience
      </Link>
            <Link
        href="#projects"
        className={styles.mainButton}
      >
        Projects
      </Link>
    </div>
  )
}