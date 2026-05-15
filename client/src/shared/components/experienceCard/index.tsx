import React from "react";
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
}) => (
  <div className={styles.container}>
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

export default ExperienceCard;
