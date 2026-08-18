import type { SearchBarProps } from "../types/entertainment";
import SearchIcon from "../assets/icons/icon-search.svg?react";

const SearchBar = ({ input, onInputChange, onSearchTerm }: SearchBarProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearchTerm();
      }}
      className="flex w-full items-center gap-4 md:gap-6"
    >
      <button
        type="submit"
        aria-label="Search"
        className="shrink-0 cursor-pointer"
      >
        <SearchIcon className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <input
        type="text"
        placeholder="Search for movies or TV series"
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
        className="
          min-w-0 flex-1 border-b border-transparent
          bg-transparent pb-2 outline-none
          text-preset-2-mobile caret-red-500

          placeholder:text-white/50

          focus:border-blue-500

          md:text-preset-2-light
        "
      />
    </form>
  );
};

export default SearchBar;
