import { useState } from "react";
import json from "../../data.json";
import EntertainmentCards from "../components/EntertainmentCards";
import type { Entertainment } from "../types/entertainment";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const data: Entertainment[] = json as Entertainment[];
  const [movies, setMovies] = useState<Entertainment[]>(data);
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const isTrending = movies.filter((movie) => movie.isTrending);
  const isRegular = movies.filter((movie) => !movie.isTrending);
  const filteredMovies = movies.filter((movie) =>
    movie.title
      .trim()
      .toLocaleLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase()),
  );

  const onChangeBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id !== id
          ? movie
          : { ...movie, isBookmarked: !movie.isBookmarked },
      ),
    );
  };
  const onSearchTerm = () => {
    setSearchTerm(input);
  };

  return (
    <div>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onSearchTerm={onSearchTerm}
      />

      {searchTerm !== "" ? (
        filteredMovies.length > 0 ? (
          <div>
            <p>
              Found {filteredMovies.length} results for {searchTerm}
            </p>

            <EntertainmentCards
              movies={filteredMovies}
              onChangeBookmark={onChangeBookmark}
              variant="regular"
            />
          </div>
        ) : (
          `Found ${filteredMovies.length} results for ${searchTerm}`
        )
      ) : (
        <div>
          <h2>Trending</h2>

          <EntertainmentCards
            movies={isTrending}
            onChangeBookmark={onChangeBookmark}
            variant="trending"
          />
          <h2>Recommended for you</h2>

          <EntertainmentCards
            movies={isRegular}
            onChangeBookmark={onChangeBookmark}
            variant="regular"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
