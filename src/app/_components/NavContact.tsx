import styles from "../_styles/header.module.css"
import Link from "next/link"
import { Github, Linkedin, FileText, Notebook, Download } from "lucide-react";

export default function NavContact() {
  return(
    <div className={styles.contactInfo}>
      <Link
        href="https://github.com/mincodin9"
        className={styles.contactButton}
      >
        <Github size={20} color="#181717" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sumin-lee-498744354/?trk=opento_sprofile_details"
        className={styles.contactButton}
      >
        <Linkedin size={20} color="#0A66C2" />
      </Link>
      <Link
        href="https://medium.com/@mincodin9"
        className={styles.contactButton}
      >
        <Notebook size={20} color="#628141" />
      </Link>
      <Link
        href="/test_resume.pdf"
        className={styles.contactButton}
      >
        <div className={styles.contactButtonDetail}>
          <Download size={20} color="#8F0177" />
        </div>
      </Link>
    </div>
  )
}