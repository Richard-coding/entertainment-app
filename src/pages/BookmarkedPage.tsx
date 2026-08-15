import EntertainmentCards from "../components/EntertainmentCards";
import { useOutletContext } from "react-router";
import type { MainLayoutContext } from "../types/entertainment";

const BookmarkedPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();
  const bookmarkedMovies = movies.filter(
    (movie) =>
      movie.category === "Movie" && movie.isBookmarked,
  );
  const bookmarkedTvSeries = movies.filter(
    (movie) =>
      movie.category === "TV Series" && movie.isBookmarked,
  );
  return (
    <section>
      <div>
        <h2>Bookmarked Movies</h2>
        <EntertainmentCards
          movies={bookmarkedMovies}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
      <div>
        <h2>Bookmarked TV Series</h2>
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
