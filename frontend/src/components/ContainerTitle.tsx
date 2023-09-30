import styles from "../styles/ContainerTitle.module.scss";

function ContainerTitle({ title }: { title: string }) {
  return <p className={styles.title}>{title}</p>;
}

export default ContainerTitle;
