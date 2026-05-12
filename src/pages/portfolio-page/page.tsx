import React from "react";
import styles from "./style.module.scss";

// Import all pages
import Introduction from "../introduction/page";
import About from "../about/page";
import Skills from "../skills/page";
import Services from "../services/page";
import Projects from "../projects/page";
import WorkExperience from "../experience/page";
import Contact from "../contact/page";
import Footer from "../footer/page";
import Divider from "../../components/divider";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.scrollContainer}>
        <Introduction />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <WorkExperience />
        <Divider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
