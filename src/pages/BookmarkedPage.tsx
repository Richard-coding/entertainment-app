import EntertainmentCards from "../components/EntertainmentCards";
import { useOutletContext } from "react-router";
import type { MainLayoutContext } from "../types/entertainment";

const BookmarkedPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();
  const bookmarkedMovies = movies.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked,
  );
  const bookmarkedTvSeries = movies.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked,
  );
  return (
    <section className="flex min-w-0 flex-col gap-8 px-4 md:gap-10 md:px-0">
      <div className="flex min-w-0 flex-col gap-4">
        <h2 className="text-preset-1-mobile md:text-preset-1">
          Bookmarked Movies
        </h2>
        <EntertainmentCards
          movies={bookmarkedMovies}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-4">
        <h2 className="text-preset-1-mobile md:text-preset-1">
          Bookmarked TV Series
        </h2>
        <EntertainmentCards
          movies={bookmarkedTvSeries}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
    </section>
  );
};

export default BookmarkedPage;
