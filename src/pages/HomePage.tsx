import { useState } from "react";
import json from "../../data.json";
import EntertainmentCards from "../components/EntertainmentCards";
import type { EntertainmentCard } from "../types/entertainment";

const Home = () => {
  const data: EntertainmentCard[] = json as EntertainmentCard[];
  const [movies, setMovies] = useState<EntertainmentCard[]>(data);

  const isTrending = movies.filter((movie) => movie.isTrending);
  const isRegular = movies.filter((movie) => !movie.isTrending);

  const onChangeBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id !== id
          ? movie
          : { ...movie, isBookmarked: !movie.isBookmarked },
      ),
    );
  };

  return (
    <div>
      <div>
        <h2>Trending</h2>
        <EntertainmentCards
          movies={isTrending}
          onChangeBookmark={onChangeBookmark}
        />
      </div>

      <div>
        <h2>Recommended</h2>
        <EntertainmentCards
          movies={isRegular}
          onChangeBookmark={onChangeBookmark}
        />
      </div>
    </div>
  );
};

export default Home;
