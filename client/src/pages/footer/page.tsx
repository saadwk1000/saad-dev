import Icons from "../../shared/assets/icons";
import ContactCard from "../../shared/components/contactCard";
import { RouteConstant } from "../../shared/routes/routeConstant";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const contactLinks = [
    {
      icon: Icons.WhatsApp,
      // title: "WhatsApp",
      link: "https://wa.me/923394105509",
    },
    {
      icon: Icons.Gmail,
      // title: "Gmail",
      link: "mailto:saadwaheed67@gmail.com",
    },
    {
      icon: Icons.LinkedIn,
      // title: "LinkedIn",
      link: "https://www.linkedin.com/in/saadwk1000",
    },
    {
      icon: Icons.Call,
      // title: "Quick Call",
      link: "tel:+923394105509",
    },
  ];
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
          <div className={styles.cardSide}>
            <div className={styles.grid}>
              {contactLinks.map((item, index) => (
                <ContactCard key={index} icon={item.icon} link={item.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
