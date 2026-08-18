import { useOutletContext } from "react-router";
import EntertainmentCards from "../components/EntertainmentCards";
import type { MainLayoutContext } from "../types/entertainment";

const MoviesPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();

  const filteredMovies = movies.filter((movie) => movie.category === "Movie");

  return (
    <section className="px-4 md:px-0">
      <div className="flex min-w-0 flex-col gap-4">
        <h1 className="text-preset-1-mobile md:text-preset-1">Movies</h1>

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
