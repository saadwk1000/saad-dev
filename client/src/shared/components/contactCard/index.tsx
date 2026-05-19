import React from "react";
import styles from "./style.module.scss";

interface ContactProps {
  icon: string;
  link: string;
}

const ContactCard: React.FC<ContactProps> = ({ icon, link }) => (
  <a href={link} className={styles.card} target="_blank" rel="noreferrer">
    <div className={styles.iconWrapper}>
      <img src={icon} alt={"icon"} />
    </div>
  </a>
);

export default ContactCard;
