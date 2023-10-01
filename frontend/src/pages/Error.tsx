import { Link } from "react-router-dom";
import styles from "../styles/Error.module.scss";
import errorLogo from "/cry_emoji.png";

function Error() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.errorPage}>
          <div className={styles.title}>
            <span className={styles.text}>4</span>
            <img className={styles.icon} src={errorLogo} />
            <span className={styles.text}>4</span>
          </div>
          <h2 className={styles.subtitle}>Oops! Page Not Be Found</h2>
          <p className={styles.help}>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <Link to="/" className={styles.homeLink}>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
