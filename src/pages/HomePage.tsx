import { useOutletContext } from "react-router";
import EntertainmentCards from "../components/EntertainmentCards";
import type { MainLayoutContext } from "../types/entertainment";

const Home = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();

  const isTrending = movies.filter((movie) => movie.isTrending);
  const isRegular = movies.filter((movie) => !movie.isTrending);

  return (
    <section>
      <div>
        <h2 className="text-preset-1-mobile">Trending</h2>
        <EntertainmentCards
          movies={isTrending}
          onChangeBookmark={onChangeBookmark}
          variant="trending"
        />
      </div>
      <div>
        <h2>Recommended for you</h2>
        <EntertainmentCards
          movies={isRegular}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
    </section>
  );
};

export default Home;
