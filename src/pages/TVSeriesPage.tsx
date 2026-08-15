import type { MainLayoutContext } from "../types/entertainment";
import EntertainmentCards from "../components/EntertainmentCards";
import { useOutletContext } from "react-router";

const TvSeriesPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();
  const filteredTvSeries = movies.filter((movie) => movie.category === "TV Series")

  return (
    <section>
      <div>
        <h2>Tv Series</h2>
        <EntertainmentCards
          movies={filteredTvSeries}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      </div>
    </section>
  );
};

export default TvSeriesPage;
