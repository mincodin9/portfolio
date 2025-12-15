import styles from "../_styles/experience.module.css"
import ExperienceTabs from "./ExperienceTabs";

export default function Experience() {
  return(
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.experienceHeader}>
          <span>/ Experience</span>
        </div>
        <div className={styles.experienceContent}>
          <ExperienceTabs />
        </div>
      </div>
    </section>
  );
}