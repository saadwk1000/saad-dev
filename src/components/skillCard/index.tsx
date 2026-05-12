import React from "react";
import styles from "./style.module.scss";

interface SkillProps {
  icon?: string;
  title: string;
}

const SkillCard: React.FC<SkillProps> = ({ icon, title }) => (
  <div className={styles.container}>
    {icon && <img src={icon} className={styles.icon} />}
    <h4 className={styles.title}>{title}</h4>
  </div>
);

export default SkillCard;
