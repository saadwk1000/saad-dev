import SkillCard from "../../shared/components/skillCard";
import styles from "./style.module.scss";

const Skills = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Technical <span className={styles.gold}>Expertise</span>
    </h2>
    <div className={styles.grid}>
      <SkillCard title="ReactJS" />
      <SkillCard title="NextJS" />
      <SkillCard title="NodeJS" />
      <SkillCard title="NestJS" />
      <SkillCard title="PostgreSQL" />
      <SkillCard title="MongoDB" />
      <SkillCard title="MySQL" />
      <SkillCard title="SCSS" />
      <SkillCard title="TailwindCSS" />
      <SkillCard title="Docker" />
      <SkillCard title="React Native" />
      <SkillCard title="Rest API" />
    </div>
  </section>
);

export default Skills;
