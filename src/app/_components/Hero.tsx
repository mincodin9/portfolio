import styles from "../_styles/hero.module.css"
export default function Hero() {
  return(
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.canvasAnimation}></div>
        <div className={styles.title}>
          <span className={styles.greeting}>Hi, I'm </span>
          <span className={styles.titleName}>Sumin</span>
          <span className={styles.cursorBlink}>|</span>
        </div>
        <div className={styles.subtitle}>
          <span>I turn complexity into clarity.</span>
        </div>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.ctaButtonPrimary}>See My Work</a>
          <a href="/test_resume.pdf" className={styles.ctaButtonSecondary}>Resume</a>
        </div>
      </div>
    </section>
  );
}