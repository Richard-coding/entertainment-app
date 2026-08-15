import EntertainmentCards from "./EntertainmentCards";
import type { SearchResultsProps } from "../types/entertainment";

const SearchResults = ({
  movies,
  onChangeBookmark,
  searchTerm,
}: SearchResultsProps) => {
  return (
    <section>
      {movies.length > 0 ? (
        <div>
          <h2>
            Found {movies.length} results for "{searchTerm}"
          </h2>
          <EntertainmentCards
            movies={movies}
            onChangeBookmark={onChangeBookmark}
            variant="regular"
          />
        </div>
      ) : (
        `Found ${movies.length} results for "${searchTerm}"`
      )}
    </section>
  );
};

export default SearchResults;
