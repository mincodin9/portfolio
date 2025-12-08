import styles from "../_styles/header.module.css"

export default function Header() {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Sumin Lee</h1>
      <div className={styles.variousButtons}>
        <div className={styles.mainPage}>
          <button className={styles.mainButton}>Home</button>
          <button className={styles.mainButton}>About</button>
          <button className={styles.mainButton}>Experience</button>
          <button className={styles.mainButton}>Projects</button>
        </div>
        <div className={styles.contactInfo}>
          <button className={styles.contactButton}>G</button>
          <button className={styles.contactButton}>L</button>
          <button className={styles.contactButton}>B</button>
          <button className={styles.contactButton}>R</button>
        </div>
      </div>
    </div>
  );
}