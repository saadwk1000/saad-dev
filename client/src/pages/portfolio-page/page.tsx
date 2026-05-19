import React from "react";
import styles from "./style.module.scss";

import Introduction from "../introduction/page";
import About from "../about/page";
import Skills from "../skills/page";
import Services from "../services/page";
import Projects from "../projects/page";
import WorkExperience from "../experience/page";
import Divider from "../../shared/components/divider";
import Message from "../message/page";
import Footer from "../footer/page";

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
        <Message />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
