import SkillCard from "../../components/skillCard";
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
      <SkillCard title="ExpressJS" />
      <SkillCard title="Angular" />
      <SkillCard title="PostgreSQL" />
      <SkillCard title="MongoDB" />
      <SkillCard title="MySQL" />
      <SkillCard title="SQL Server" />
      <SkillCard title="TypeScript" />
      <SkillCard title="JavaScript" />
      <SkillCard title="Testing" />
      <SkillCard title="CSS" />
      <SkillCard title="SCSS" />
      <SkillCard title="TailwindCSS" />
      <SkillCard title="Bootstrap" />
      <SkillCard title="Docker" />
      <SkillCard title="React Native" />
      <SkillCard title="GitHub" />
      <SkillCard title="Figma" />
      <SkillCard title="Postman" />
      <SkillCard title="Rest API" />
      <SkillCard title="GraphQL" />
    </div>
  </section>
);

export default Skills;
