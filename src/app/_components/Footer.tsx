import styles from "../_styles/footer.module.css"

export default function Footer() {
  return(
    <div className={styles.container}>
      <h3 className={styles.footer}>Built and designed by Sumin Lee</h3>
      <h3 className={styles.footer}>© All rights reserved.</h3>
    </div>
  );
}