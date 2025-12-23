import styles from "../_styles/hero.module.css"
import WaveCanvas from "./WaveCanvas";

export default function Hero() {
  return(
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.canvasAnimation}>
          <WaveCanvas />
        </div>
        <div className={styles.title}>
          <span className={styles.greeting}>Hi, I'm </span>
          <span className={styles.titleName}>Sumin</span>
          <span className={styles.cursorBlink}>|</span>
        </div>
        <div className={styles.subtitle}>
          <span>I turn complexity into clarity.</span>
        </div>
        <div className={styles.description}>
          <span>
            I turn creative ideas into real, scalable solutions by breaking complex projects into manageable tasks.
          </span>
        </div>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.ctaButtonPrimary}>See My Work</a>
          <a href="/test_resume.pdf" className={styles.ctaButtonSecondary}>Resume</a>
        </div>
      </div>
    </section>
  );
}