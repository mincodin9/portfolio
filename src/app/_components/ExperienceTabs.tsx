"use client";

import { useId, useState } from "react";
import styles from "../_styles/experienceTabs.module.css"
import RippleTabButton from "./RippleTabButton";

type tabKey = "technical" | "projects" | "education";

const TABS: {key: tabKey; label: string}[] = [
  { key: "technical", label: "Technical Skills" },
  { key: "projects", label: "Projects" },
  { key: "education", label: "Education" },  
]

export default function ExperienceTabs() {
  const [active, setActive] = useState<tabKey>("technical");
  const baseId = useId();

  return (
    <section className={styles.experienceTabsSection}>
      <div className={styles.tabList} role="tablist" aria-label="Experience Tabs">
        {TABS.map((t) => {
          const selected = active === t.key;
          return (
            <RippleTabButton
              key={t.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-${t.key}-panel`}
              id={`${baseId}-${t.key}-tab`}
              tabIndex={selected ? 0 : -1}
              active={selected}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </RippleTabButton>
          );
        })}
      </div>
      <div className={styles.tabPanelWrapper}> 
        {active === "technical" && (
          <div
            role="tabpanel"
            id={`${baseId}-technical-panel`}
            aria-labelledby={`${baseId}-technical-tab`}
            className={styles.tabPanel}
          >
            <div className={styles.tabPanelHeader}>
              <span className={styles.tabPanelTitle}>Technical Experience @ </span><span className={styles.tabPanelTag}>Production Systems</span>
            </div>
            <div 
              key={active}
              className={styles.tabPanelContentWrapper}
            >
              <p className={styles.tabPanelContent}>
                Gained hands-on experience working with backend systems 
                and web applications in real-world development environments.
              </p>
              <ul className={styles.tabPanelList}>
                <li className={styles.tabPanelListItem}>
                  Worked with Java and C# to modify and maintain backend application logic  
                </li>
                <li className={styles.tabPanelListItem}>
                  Contributed to existing application updates, focusing on functionality and stability
                </li>
                <li className={styles.tabPanelListItem}>
                  Implemented HTML/CSS-based UI adjustments for internal tools  
                </li>
                <li className={styles.tabPanelListItem}>
                  Acquired basic knowledge of networking and hardware concepts through practical exposure
                </li>
              </ul>
              <p className={styles.tabPanelContent}>
                This experience helped me understand how real production systems 
                are structured and how developers collaborate within existing codebases.
              </p>
            </div>
          </div>
        )}

        {active === "projects" && (
          <div
            role="tabpanel"
            id={`${baseId}-projects-panel`}
            aria-labelledby={`${baseId}-projects-tab`}
            className={styles.tabPanel}
          >
            <div className={styles.tabPanelHeader}>
              <span className={styles.tabPanelTitle}>Training & Projects @ </span><span className={styles.tabPanelTag}>Software Training Program</span>
              <p className={styles.tabPanelDate}>
                May 2022 - October 2022
              </p>
            </div>
            <div 
              key={active}
              className={styles.tabPanelContentWrapper}
            >
              <p className={styles.tabPanelContent}>
                Completed an intensive 5.5-month software development training program,
                including a team-based project phase focused on building functional web applications.
              </p>
              <p className={styles.tabPanelContent}>
                Worked on:
              </p>
              <ul className={styles.tabPanelList}>
                <li className={styles.tabPanelListItem}>
                  Frontend–backend data flow and API integration
                </li>
                <li className={styles.tabPanelListItem}>
                  Web application structure and feature implementation
                </li>
                <li className={styles.tabPanelListItem}>
                  Team-based development and task coordination<br/>
                  (Selected projects are detailed in the Projects section below.)
                </li>
              </ul>
            </div>
          </div>
        )}

        {active === "education" && (
          <div
            role="tabpanel"
            id={`${baseId}-education-panel`}
            aria-labelledby={`${baseId}-education-tab`}
            className={styles.tabPanel}
          >
            <div className={styles.tabPanelHeader}>
              <span className={styles.tabPanelTitle}>Education @ </span><span className={styles.tabPanelTag}>Korea National Open University</span>
              <p className={styles.tabPanelDate}>
                March 2020 - February 2023
              </p>
            </div>
            <div 
              key={active}
              className={styles.tabPanelContentWrapper}
            >
              <ul className={styles.tabPanelList}>
                <li className={styles.tabPanelListItem}>
                  Studied core computer science subjects including software development, data structures, databases, and web technologies.  
                </li>
                <li className={styles.tabPanelListItem}>
                  Built a solid foundation in problem-solving and programming principles.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}