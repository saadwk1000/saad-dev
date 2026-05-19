import React from "react";
import styles from "./style.module.scss";
import Icons from "../../assets/icons";

interface ProjectProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  onClick,
}) => (
  <div className={styles.card}>
    <div className={styles.overlay}></div>

    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <button onClick={onClick} className={styles.button}>
        <img src={Icons.GitHub} alt="github" className={styles.githubIcon} />
      </button>
    </div>
  </div>
);

export default ProjectCard;
