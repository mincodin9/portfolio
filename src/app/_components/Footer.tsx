import styles from "../_styles/footer.module.css"

export default function Footer() {
  return(
    <div className={styles.container}>
      <p className={styles.footer}>Built and designed by Sumin Lee</p>
      <p className={styles.footer}>© All rights reserved.</p>
    </div>
  );
}