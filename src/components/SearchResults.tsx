import type { SearchResultsProps } from "../types/entertainment";
import EntertainmentCards from "./EntertainmentCards";

const SearchResults = ({
  movies,
  onChangeBookmark,
  searchTerm,
}: SearchResultsProps) => {
  return (
    <section className="px-4 md:px-0">
      <div className="flex min-w-0 flex-col gap-4">
        <h1 className="text-preset-1-mobile md:text-preset-1">
          Found {movies.length} results for "{searchTerm}"
        </h1>

        {movies.length > 0 && (
          <EntertainmentCards
            movies={movies}
            onChangeBookmark={onChangeBookmark}
            variant="regular"
          />
        )}
      </div>
    </section>
  );
};

export default SearchResults;
