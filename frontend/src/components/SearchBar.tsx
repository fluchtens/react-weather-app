import styles from "../styles/SearchBar.module.scss";

interface SearchBarProps {
  city: string;
  onChange: (city: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({ city, onChange, onKeyDown }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        value={city}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search a city"
      />
    </div>
  );
}

export default SearchBar;
