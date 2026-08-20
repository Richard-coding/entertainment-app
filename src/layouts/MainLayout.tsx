import { useEffect, useState } from "react";
import json from "../../data.json";
import type { Entertainment } from "../types/entertainment";
import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router";

import SideBar from "../components/SideBar";
import MovieIcon from "../assets/icons/logo.svg?react";
import ProfileIcon from "../assets/icons/image-avatar.png";
import SearchResults from "../components/SearchResults";

const MainLayout = () => {
  const data = json as Entertainment[];

  const [movies, setMovies] = useState<Entertainment[]>(() => {
    const local = localStorage.getItem("bookmarked");

    if (!local) return data;

    const savedBookmarkedIds: number[] = JSON.parse(local);

    return data.map((movie) => ({
      ...movie,
      isBookmarked: savedBookmarkedIds.includes(movie.id),
    }));
  });

  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const bookmarkedIds = movies
    .filter((movie) => movie.isBookmarked)
    .map((movie) => movie.id);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const onChangeBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  };

  const onSearchTerm = () => {
    setSearchTerm(input.trim());
  };

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  return (
    <main
      className="
        flex min-h-screen flex-col bg-blue-950
        md:p-6
        lg:flex-row lg:gap-9 lg:p-8
      "
    >
      <aside
        className="
          flex h-[56px] w-full items-center justify-between
          bg-blue-800 px-4

          md:h-[72px] md:rounded-[10px] md:px-6

          lg:h-[calc(100vh-64px)] lg:w-[96px] lg:min-w-[96px]
          lg:flex-col lg:justify-between lg:rounded-[20px]
          lg:px-0 lg:py-8
        "
      >
        <MovieIcon className="h-auto w-[32px] text-red-500" />

        <SideBar />

        <img
          src={ProfileIcon}
          alt="Profile icon"
          className="
            h-6 w-6 rounded-full border border-white
            md:h-8 md:w-8
            lg:h-10 lg:w-10
          "
        />
      </aside>

      <section className="min-w-0 flex-1 pt-6 md:pt-8 lg:pt-0">
        <div className="mb-6 px-4 md:mb-8 md:px-0 lg:mt-7">
          <SearchBar
            input={input}
            onInputChange={setInput}
            onSearchTerm={onSearchTerm}
          />
        </div>

        {searchTerm ? (
          <SearchResults
            movies={filteredMovies}
            onChangeBookmark={onChangeBookmark}
            searchTerm={searchTerm}
          />
        ) : (
          <Outlet context={{ movies, onChangeBookmark }} />
        )}
      </section>
    </main>
  );
};

export default MainLayout;
