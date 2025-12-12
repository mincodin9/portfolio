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
            <p>
              I’m an entry-level software engineer based in South Korea,
              seeking opportunities in Australia, with a strong foundation
              in computer science and hands-on experience in full-stack development.
              <br /><br />
              Here are some technologies I’ve been using in my recent projects:
              <br /><br />
              ▸ React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▸ Next.js<br />
              ▸ Typescript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▸ JavaScript<br />
              ▸ React-Native&nbsp;&nbsp;&nbsp;&nbsp;▸ Expo<br />
              ▸ Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▸ C#<br /><br />
              Outside of work, I'm interested in working out, doing ballet and yoga, and reading books on many kinds of topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}