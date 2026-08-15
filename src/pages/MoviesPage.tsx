import type { MainLayoutContext } from "../types/entertainment";
import EntertainmentCards from "../components/EntertainmentCards";
import { useOutletContext } from "react-router";

const MoviesPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();
  const filteredMovies = movies.filter((movie) => movie.category === "Movie")

  return (
    <section>
      <div>
        <h2>Movies</h2>
        <EntertainmentCards
          movies={filteredMovies}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
    </section>
  );
};

export default MoviesPage;
