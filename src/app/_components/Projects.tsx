import { Github } from "lucide-react";
import Link from "next/link"
import styles from "../_styles/projects.module.css"
import ProjectsHighlightTabs from "./ProjectsHighlightTabs";

export default function Projects() {
  return(
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.projectsHeader}>
          <span>/ Projects</span>
        </div>
        <div className={styles.projectsHighlightWrapper}>
          <ProjectsHighlightTabs />
        </div>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <img src="/screenshots/portfolio.png" alt="Project One Screenshot" />
            <div className={styles.projectOverlay}>
              <div className={styles.OverlayHeader}>
                <span className={styles.projectTitle}>Portfolio</span>
                <Link
                  href="https://github.com/mincodin9/portfolio"
                  className={styles.githubLink}
                >
                  <Github size={15} color="#181717" />
                </Link>
              </div>
              <p className={styles.projectDescription}>My personal portfolio website showcasing my projects and skills.</p>
              <p className={styles.projectTechStack}>Tech Stack: React,Next.js, TypeScript, CSS Modules</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectOverlay}>
              <div className={styles.OverlayHeader}>
                <span className={styles.projectTitle}>Project Two</span>
              </div>
              <p className={styles.projectDescription}>Project Two is coming soon!</p>
              <p className={styles.projectTechStack}>Tech Stack: Not decided yet</p>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectOverlay}>
              <div className={styles.OverlayHeader}>
                <span className={styles.projectTitle}>Project Three</span>
              </div>
              <p className={styles.projectDescription}>Project Three is coming soon!</p>
              <p className={styles.projectTechStack}>Tech Stack: Not decided yet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}