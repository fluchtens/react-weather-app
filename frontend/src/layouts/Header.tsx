import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaWind, FaCloudSunRain } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.mainLink}>
        <FaWind className={styles.mainIcon} />
      </Link>

      <ul className={styles.linkList}>
        <li>
          <Link to="/" className={styles.linkBtn}>
            <FaCloudSunRain className={styles.linkIcon} />
            Weather
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.linkBtn}>
            <AiOutlineUnorderedList className={styles.linkIcon} />
            Cities
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.linkBtn}>
            <LuSettings2 className={styles.linkIcon} />
            Settings
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
