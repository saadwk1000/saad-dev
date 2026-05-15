import React from "react";
import ContactCard from "../../shared/components/contactCard";
import styles from "./style.module.scss";
import Icons from "../../shared/assets/icons";

const Contact: React.FC = () => {
  // Data array for easy maintenance
  const contactLinks = [
    {
      icon: Icons.WhatsApp,
      title: "WhatsApp",
      link: "https://wa.me/923394105509",
    },
    {
      icon: Icons.Gmail,
      title: "Gmail",
      link: "mailto:saadwaheed67@gmail.com",
    },
    {
      icon: Icons.LinkedIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/saadwk1000",
    },
    {
      icon: Icons.Phone,
      title: "Quick Call",
      link: "tel:+923394105509",
    },
  ];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            Let's <span className={styles.gold}>Connect</span>
          </h2>
          <p className={styles.subtitle}>
            Currently available for freelance opportunities and full-time senior
            roles. Reach out through any of these platforms.
          </p>
        </div>

        <div className={styles.cardSide}>
          <div className={styles.grid}>
            {contactLinks.map((item, index) => (
              <ContactCard
                key={index}
                icon={item.icon}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
