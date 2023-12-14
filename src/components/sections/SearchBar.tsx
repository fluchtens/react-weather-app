interface SearchBarProps {
  city: string;
  onChange: (city: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ city, onChange, onKeyDown }: SearchBarProps) => (
  <section className="py-1 px-6 rounded-2xl md:rounded-full bg-secondary">
    <input
      className="w-full h-12 bg-transparent outline-none placeholder-font2"
      type="text"
      value={city}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Search a city"
    />
  </section>
);
