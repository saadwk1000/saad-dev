import Images from "../../shared/assets/images";
import styles from "./style.module.scss";

const About = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          About <span className={styles.gold}>Me</span>
        </h2>
        <p className={styles.text}>
          I'm a Full Stack Engineer and a Computer Science Graduate from the
          University of Central Punjab. With years of hands-on industry
          experience & client satisfaction, I have developed expertise in
          architecting scalable web applications. I'm proficient in both
          front-end and back-end technologies, allowing me to build complete
          solutions from the ground up.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.illustration}>
          {/* Placeholder for animated coding icon */}
          <img src={Images.Saad} alt="saad" className={styles.codeIcon} />
        </div>
      </div>
    </div>
  </section>
);

export default About;
