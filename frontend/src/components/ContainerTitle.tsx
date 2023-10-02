import styles from "../styles/ContainerTitle.module.scss";

interface ContainerTitleProps {
  title: string;
}

export const ContainerTitle = ({ title }: ContainerTitleProps) => (
  <p className={styles.title}>{title}</p>
);
