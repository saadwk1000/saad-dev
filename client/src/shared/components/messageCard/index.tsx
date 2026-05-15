import React from "react";
import styles from "./style.module.scss";

export interface MessageProps {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface MessageCardComponentProps {
  data: MessageProps;
}

const MessageCard: React.FC<MessageCardComponentProps> = ({ data }) => {
  const { name, email, message, createdAt } = data;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.messageCard}>
      <div className={styles.cardHeader}>
        <div className={styles.metaInfo}>
          <h3 className={styles.clientName}>{name}</h3>
          <a href={`mailto:${email}`} className={styles.clientEmail}>
            {email}
          </a>
        </div>
        <span className={styles.dateBadge}>{formattedDate}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.messageText}>{message}</p>
      </div>
    </div>
  );
};

export default MessageCard;
