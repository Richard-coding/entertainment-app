import type { SearchBarProps } from "../types/entertainment";
import SearchIcon from "../assets/icons/icon-search.svg?react";

const SearchBar = ({ input, onInputChange, onSearchTerm }: SearchBarProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchTerm();
      }}
      className="flex gap-4"
    >
      <button className="cursor-pointer">
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Search you Movie or TV Series"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
