import Images from "../../assets/images";
import ExperienceCard from "../../components/experienceCard";
import styles from "./style.module.scss";

const WorkExperience = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Work <span className={styles.gold}>History</span>
    </h2>
    <div className={styles.timeline}>
      <ExperienceCard
        logo={Images.CodingPixel}
        designation="MERN Stack Engineer"
        company="Coding Pixel USA"
        duration="July 2025 - Present"
      />
      <ExperienceCard
        logo={Images.HawksTech}
        designation="Elixir Developer"
        company="Hawks Tech"
        duration="March 2025 - June 2025"
      />
      <ExperienceCard
        logo={Images.IREGIT}
        designation="Frontend Engineer"
        company="IREG-IT"
        duration="February 2025"
      />
      <ExperienceCard
        logo={Images.Nodlays}
        designation="MERN Stack Intern"
        company="NODLAYS"
        duration="November 2023 - January 2024"
      />
    </div>
  </section>
);

export default WorkExperience;
