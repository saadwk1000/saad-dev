import React from "react";
import styles from "./style.module.scss";

const Introduction: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <h1 className={styles.name}>
          Saad <span className={styles.gold}>Waheed</span>
        </h1>
        <p className={styles.subtitle}>Full Stack Engineer — Web | Mobile</p>
        <p className={styles.description}>
          Crafting scalable, high-performance digital solutions with a focus on
          modern architectures and seamless user experiences.
        </p>
        <a
          href="/Saad-R-2026-ATSF.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          View Resume
        </a>
      </div>

      <div className={styles.right}>
        <div className={styles.animationCanvas}>
          <div className={styles.coreModule}>
            <span className={styles.brace}>{"{"}</span>
            <span className={styles.brace}>{"}"}</span>
          </div>
          <div className={`${styles.stream} ${styles.stream1}`}></div>
          <div className={`${styles.stream} ${styles.stream2}`}></div>
          <div className={`${styles.stream} ${styles.stream3}`}></div>
          <div className={`${styles.orbit}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
