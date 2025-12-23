"use client";

import { useId, useState } from "react";
import { Github } from "lucide-react";
import styles from "../_styles/projectsHighlightTabs.module.css"
import Link from "next/link";
import HighlightCarousel from "./HighlightCarousel";


export default function ProjectsHighlightTabs() {
  const baseId = useId();

  const highlights = [
  { id: "highlight1", bg: "/highlight1.png", title: "coming soon!", desc: "Project Highlight One is coming soon!", stack: "Not decided yet", link: "" },
  { id: "highlight2", bg: "/highlight2.png", title: "coming soon!", desc: "Project Highlight Two is coming soon!", stack: "Not decided yet", link: "" },
  { id: "highlight3", bg: "/highlight3.png", title: "coming soon!", desc: "Project Highlight Three is coming soon!", stack: "Not decided yet", link: "" },
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
                  Project Highlight<br /> {h.title}
                </span>

                <p className={styles.projectsHighlightDescription}>{h.desc}</p>

                <p className={styles.projectsHighlightTechStack}>
                  Tech Stack: {h.stack}
                </p>
                {/* <Link
                  href={h.link}
                  className={styles.githubLink}
                >
                  <Github size={15} color="#181717" />
                </Link>  */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </HighlightCarousel>
  );
}