import styles from "./style.module.scss";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <div className={styles.card}>
    <div className={styles.left}>
      <img src={icon} alt={title} />
    </div>
    <div className={styles.right}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceCard;
