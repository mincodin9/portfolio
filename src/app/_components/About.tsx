import styles from "../_styles/about.module.css"

export default function About() {
  return(
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h1>About me</h1>
      </div>
    </section>
  );
}