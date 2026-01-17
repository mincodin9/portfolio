"use client";

import { useId, useState } from "react";
import { Download, Github, Youtube } from "lucide-react";
import styles from "../_styles/projectsHighlightTabs.module.css"
import Link from "next/link";
import HighlightCarousel from "./HighlightCarousel";


export default function ProjectsHighlightTabs() {
  const baseId = useId();

  const highlights = [
  { id: "seize-the-day", bg: "/screenshots/seize-the-day.png", title: "Seize the Day", desc: "Plan your day → See your week", stack: "React Native(Expo), TypeScrip, AsyncStorage", linkGit: "https://github.com/mincodin9/seize-the-day", linkYoutube: "https://www.youtube.com/watch?v=TwVGjDoBwBs", apk: "/apk/seize-the-day.apk" },
  { id: "highlight2", bg: "/highlight2.png", title: "Project Highlight", desc: "Project Highlight Two is coming soon!", stack: "Not decided yet", linkGit: "", linkYoutube: "", apk: "" },
  { id: "highlight3", bg: "/highlight3.png", title: "Project Highlight", desc: "Project Highlight Three is coming soon!", stack: "Not decided yet", linkGit: "", linkYoutube: "", apk: "" },
];
  
  return (
    <HighlightCarousel slideCount={highlights.length}>
      {highlights.map((h) => (
        <div key={h.id} className={styles.slide}>
          <div
            className={styles.projectsHighlight}
            style={{ backgroundImage: `url("${h.bg}")` }}
          >
            <div className={styles.projectsHighlightOverlay}>
              <div className={styles.projectsHighlightOverlayHeader}>
                <span className={styles.projectsHighlightTitle}>
                  <br /> {h.title}
                </span>

                <p className={styles.projectsHighlightDescription}>{h.desc}</p>

                <p className={styles.projectsHighlightTechStack}>
                  Tech Stack: {h.stack}
                </p>
                <div className={styles.linkGroup}>
                  <Link
                    href={h.linkGit}
                    className={styles.githubLink}
                  >
                    <Github size={15} color="#181717" />
                  </Link> 
                  <Link
                    href={h.linkYoutube}
                    className={styles.githubLink}
                  >
                    <Youtube size={15} color="#b71616" />
                  </Link>
                  <Link
                    href={h.apk}
                    className={styles.githubLink}
                  >
                    <Download size={15} color="#8F0177" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </HighlightCarousel>
  );
}