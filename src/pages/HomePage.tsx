import { useOutletContext } from "react-router";
import EntertainmentCards from "../components/EntertainmentCards";
import type { MainLayoutContext } from "../types/entertainment";

const HomePage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();

  const trendingMovies = movies.filter((movie) => movie.isTrending);

  const regularMovies = movies.filter((movie) => !movie.isTrending);

  return (
    <section className="flex min-w-0 flex-col gap-6 px-4 md:gap-10 md:px-0">
      <div className="flex min-w-0 flex-col gap-4">
        <h1 className="text-preset-1-mobile md:text-preset-1">Trending</h1>

        <EntertainmentCards
          movies={trendingMovies}
          onChangeBookmark={onChangeBookmark}
          variant="trending"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <h1 className="text-preset-1-mobile md:text-preset-1">
          Recommended for you
        </h1>

        <EntertainmentCards
          movies={regularMovies}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
    </section>
  );
};

export default HomePage;
