import { useEffect, useState } from "react";
import json from "../../data.json";
import type { Entertainment } from "../types/entertainment";
import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router";
import SearchResults from "../components/SearchResults";
import SideBar from "../components/SideBar";
import MovieIcon from "../assets/icons/logo.svg?react";
import ProfileIcon from "../assets/icons/image-avatar.png";

const MainLayout = () => {
  const data: Entertainment[] = json as Entertainment[];
  const [movies, setMovies] = useState<Entertainment[]>(() => {
    const local = localStorage.getItem("bookmarked");

    if (local) {
      const savedBookmarkedIds = JSON.parse(local);
      return data.map((movie) => ({
        ...movie,
        isBookmarked: savedBookmarkedIds.includes(movie.id),
      }));
    }
    return data;
  });
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const bookmarkedIds = movies
    .filter((movie) => movie.isBookmarked)
    .map((movie) => movie.id);

  const onChangeBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id !== id
          ? movie
          : { ...movie, isBookmarked: !movie.isBookmarked },
      ),
    );

    localStorage.setItem("bookmarked", JSON.stringify(id));
  };
  const onSearchTerm = () => {
    setSearchTerm(input);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchTerm),
  );

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarkedIds));
  }, [movies]);

  return (
    <main className="flex flex-col gap-6 bg-blue-950">
      <aside className="flex justify-between items-center bg-blue-800 p-4">
        <MovieIcon className="h-auto w-auto text-red-500"/>
        <SideBar />
        <div>
          <img src={ProfileIcon} alt="Profile icon" className="w-6 h-6"/>
        </div>
      </aside>

      <section>
        <div>
          <SearchBar
            input={input}
            onInputChange={setInput}
            onSearchTerm={onSearchTerm}
          />
        </div>

        {searchTerm.length > 0 ? (
          <SearchResults
            movies={filteredMovies}
            onChangeBookmark={onChangeBookmark}
            searchTerm={searchTerm}
          />
        ) : (
          <Outlet context={{ movies, onChangeBookmark, searchTerm }} />
        )}
      </section>
    </main>
  );
};

export default MainLayout;
