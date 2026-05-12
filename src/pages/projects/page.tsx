import ProjectCard from "../../components/projectCard";
import styles from "./style.module.scss";

const Projects = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Featured <span className={styles.gold}>Projects</span>
    </h2>
    <div className={styles.grid}>
      <ProjectCard
        title="MockHCM - Admin"
        description="Built a microservices-based Time-Off Management system using React, NestJS, and TypeORM with Dockerized services. It supports leave requests, manager approvals, and real-time balance validation via a mock HCM service."
        onClick={() => {
          window.open("https://github.com/saadwk1000/system-admin-mockHCM.git");
        }}
      />
      <ProjectCard
        title="MyRoster - Director"
        description="Built a sports roster management prototype using Next.js and Cursor. The platform supports multiple registered teams with dedicated Parent, Player, and Coach workflows for managing player information and team interactions."
        onClick={() => {
          window.open("https://github.com/saadwk1000/MyRoster-Director.git");
        }}
      />
    </div>
  </section>
);

export default Projects;
