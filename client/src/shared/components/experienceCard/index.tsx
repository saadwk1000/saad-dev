import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

interface ExperienceProps {
  logo: string;
  designation: string;
  company: string;
  duration: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  logo,
  designation,
  company,
  duration,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.container} ${show ? styles.show : ""}`}
    >
      <div className={styles.left}>
        <img src={logo} alt={company} className={styles.logo} />
      </div>

      <div className={styles.right}>
        <h3 className={styles.designation}>{designation}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.duration}>{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
