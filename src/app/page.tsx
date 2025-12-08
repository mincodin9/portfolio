
import styles from "./page.module.css";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
