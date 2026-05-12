import React from "react";
import styles from "./style.module.scss";

interface ContactProps {
  icon: string;
  title: string;
  link: string;
}

const ContactCard: React.FC<ContactProps> = ({ icon, title, link }) => (
  <a href={link} className={styles.card} target="_blank" rel="noreferrer">
    <div className={styles.iconWrapper}>
      <img src={icon} alt={title} />
    </div>
    <span className={styles.title}>{title}</span>
  </a>
);

export default ContactCard;
