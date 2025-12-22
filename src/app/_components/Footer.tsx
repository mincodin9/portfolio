import styles from "../_styles/footer.module.css"

export default function Footer() {
  return(
    <div className={styles.container}>
      <p className={styles.footer}>© 2025 Sumin Lee · Software Developer</p>
      <p className={styles.footer}>Building web applications across frontend and backend</p>
    </div>
  );
}