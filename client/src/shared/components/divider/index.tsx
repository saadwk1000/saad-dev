import React from "react";
import styles from "./style.module.scss";

const Divider: React.FC = () => {
  return (
    <div className={styles.dividerWrapper}>
      <div className={styles.line}></div>
    </div>
  );
};

export default Divider;
