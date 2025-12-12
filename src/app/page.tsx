
import styles from "./page.module.css";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function Home() {
  return (
    <div className={`${styles.page} ${fredoka.className}`}>
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
