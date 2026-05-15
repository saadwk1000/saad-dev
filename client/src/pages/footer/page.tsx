import { RouteConstant } from "../../shared/routes/routeConstant";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <button
          onClick={() => {
            nav(RouteConstant.login.path);
          }}
          className={styles.logo}
        >
          SAAD<span className={styles.gold}>WAHEED</span>
        </button>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
