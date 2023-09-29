import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2023 All rights reserved</p>
        <p>Made by fluchtens</p>
      </div>
    </footer>
  );
}

export default Footer;
