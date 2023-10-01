import styles from "../styles/SearchBar.module.scss";

interface SearchBarProps {
  city: string;
  onCityChange: (city: string) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({
  city,
  onCityChange,
  onKeyPress,
}: SearchBarProps): JSX.Element {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Search a city"
      />
    </div>
  );
}

export default SearchBar;
