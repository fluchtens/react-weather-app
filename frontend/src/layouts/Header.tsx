import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaWind, FaCloudSunRain } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import styles from "../styles/Header.module.scss";

interface LinkButtonProps {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const LinkButton = ({ path, label, icon }: LinkButtonProps) => (
  <Link to={path} className={styles.linkBtn}>
    {icon}
    {label}
  </Link>
);

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.mainLink}>
        <FaWind className={styles.mainIcon} />
      </Link>

      <ul className={styles.linkList}>
        <li>
          <LinkButton
            path="/"
            label="Weather"
            icon={<FaCloudSunRain className={styles.linkIcon} />}
          />
        </li>
        <li>
          <LinkButton
            path="/"
            label="Cities"
            icon={<AiOutlineUnorderedList className={styles.linkIcon} />}
          />
        </li>
        <li>
          <LinkButton
            path="/"
            label="Settings"
            icon={<LuSettings2 className={styles.linkIcon} />}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
