import React from "react";
import ServiceCard from "../../components/serviceCard";
import styles from "./style.module.scss";
import Icons from "../../assets/icons";

// Configuration object for scalability
const servicesData = [
  {
    icon: Icons.ReactJS,
    title: "MERN Stack Development",
    description:
      "End-to-end full stack development using MongoDB, Express, React, and Node.js for high-performance applications.",
  },
  {
    icon: Icons.Angular,
    title: "MEAN Stack Development",
    description:
      "Enterprise-grade solutions focusing on structured Angular frontend and robust Node.js backend architectures.",
  },
  {
    icon: Icons.PostgreSQL,
    title: "PERN Stack Development",
    description:
      "Relational database expertise using PostgreSQL combined with modern React and Express development.",
  },
  {
    icon: Icons.NextJS,
    title: "JamStack Development",
    description:
      "Fast, secure, and SEO-friendly static sites using Next.js, Headless CMS, and optimized CDN deployment.",
  },
  {
    icon: Icons.NodeJS,
    title: "NodeJS Backend Development",
    description:
      "High-concurrency microservices and RESTful API development with a focus on security and scalability.",
  },
  {
    icon: Icons.ReactNatve,
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps built with React Native, delivering a native look and feel on iOS and Android.",
  },
];

const Services: React.FC = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Professional <span className={styles.gold}>Services</span>
          </h2>
          <p className={styles.description}>
            Delivering high-end technical solutions with a focus on clean code
            and premium user experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
