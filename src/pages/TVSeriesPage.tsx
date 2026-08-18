import type { MainLayoutContext } from "../types/entertainment";
import EntertainmentCards from "../components/EntertainmentCards";
import { useOutletContext } from "react-router";

const TvSeriesPage = () => {
  const { movies, onChangeBookmark } = useOutletContext<MainLayoutContext>();
  const filteredTvSeries = movies.filter(
    (movie) => movie.category === "TV Series",
  );

  return (
    <section className="px-4 md:px-0">
      <div className="flex min-w-0 flex-col gap-4">
        <h2 className="text-preset-1-mobile md:text-preset-1">TV Series</h2>
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
