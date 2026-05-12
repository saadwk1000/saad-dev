import styles from "./style.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.logo}>
        SAAD<span className={styles.gold}>WAHEED</span>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
    <hr className={styles.divider} />
  </footer>
);

export default Footer;
