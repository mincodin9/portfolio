import styles from "../_styles/about.module.css"

export default function About() {
  return(
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <span>/ About me</span>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img src="/profile.jpg" alt="Profile Picture" />
          </div>
          <div className={styles.aboutText}>
            <div className={styles.introText}>
              <span>
                I’m an entry-level software engineer based in South Korea,
                seeking opportunities in Australia, with a strong foundation
                in computer science and hands-on experience in full-stack development.
              </span>
            </div>
            <div className={styles.techList}>
              Here are some technologies I’ve been using in my recent projects:
            </div>
            <ul className={styles.techLists}>
              <li className={styles.techListItems}>React</li>
              <li className={styles.techListItems}>Next.js</li>
              <li className={styles.techListItems}>Typescript</li>
              <li className={styles.techListItems}>JavaScript</li>
              <li className={styles.techListItems}>React-Native</li>
              <li className={styles.techListItems}>Expo</li>
              <li className={styles.techListItems}>Java</li>
              <li className={styles.techListItems}>C#</li>
            </ul>
            <div className={styles.personalInterests}>
              Outside of work, I'm interested in working out, doing ballet and yoga, and reading books on many kinds of topics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}