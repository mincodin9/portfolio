"use client";

import { useId, useState } from "react";
import { Github } from "lucide-react";
import styles from "../_styles/projectsHighlightTabs.module.css"
import Link from "next/link";

type tabKey = "highlight1" | "highlight2" | "highlight3";

const TABS: {key: tabKey; label: string}[] = [
  { key: "highlight1", label: "" },
  { key: "highlight2", label: "" },
  { key: "highlight3", label: "" },  
]

export default function ProjectsHighlightTabs() {
  const [active, setActive] = useState<tabKey>("highlight1");
  const baseId = useId();
  
  return (
    <div className={styles.projectsHighlightSection}>
      <div 
        className={styles.projectsHighlight}
        // {...active === "highlight1" && (
        //   { backgroundImage: 'url("/highlight1.png")' }
        // )}
        // {...active === "highlight2" && (
        //   { backgroundImage: 'url("/highlight2.png")' }
        // )}
        // {...active === "highlight3" && (
        //   { backgroundImage: 'url("/highlight3.png")' } 
        // )}
      >
        <div className={styles.projectsHighlightOverlay}>
          <div className={styles.projectsHighlightOverlayHeader}>
            <span className={styles.projectsHighlightTitle}>Project Highlight<br/> {active === "highlight1" ? "coming soon!" : active === "highlight2" ? "coming soon!" : "coming soon!"}</span>
            <p className={styles.projectsHighlightDescription}>
              {active === "highlight1" ? "Project Highlight One is coming soon!" :
              active === "highlight2" ? "Project Highlight Two is coming soon!" :
              "Project Highlight Three is coming soon!"}
            </p>
            <p className={styles.projectsHighlightTechStack}>
              Tech Stack: 
              {active === "highlight1" ? "Not decided yet" :
              active === "highlight2" ? "Not decided yet" :
              "Not decided yet"}
            </p>
          </div>
          {/* <Link
            href={active === "highlight1" ? "" : active === "highlight2" ? "" : ""}
            className={styles.githubLink}
          >
            <Github size={15} color="#181717" />
          </Link>  */}
        </div>
      </div>

      <div className={styles.projectsHighlightTabBar} role="tablist" aria-label="Projects Highlight Tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.projectsHighlightTab} ${active === tab.key ? styles.active : ""}`}
            onClick={() => setActive(tab.key)}
            role="tab"
            aria-selected={active === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}