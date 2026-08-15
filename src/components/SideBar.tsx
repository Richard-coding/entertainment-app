import HomeIcon from "../assets/icons/icon-nav-home.svg?react";
import MoviesIcon from "../assets/icons/icon-nav-movies.svg?react";
import TvSeriesIcon from "../assets/icons/icon-nav-tv-series.svg?react";
import BookmarkIcon from "../assets/icons/icon-nav-bookmark.svg?react";
import { NavLink } from "react-router";
import type { sideBarProps } from "../types/entertainment";

const SideBar = () => {
  const sideBar: sideBarProps[] = [
    { icon: HomeIcon, link: "/" },
    { icon: MoviesIcon, link: "/movies" },
    { icon: TvSeriesIcon, link: "/tv-series" },
    { icon: BookmarkIcon, link: "/bookmarked" },
  ];

  return (
    <section className="flex gap-5 items-center justify-center">
      {sideBar.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.link}
            to={item.link}
            className={(isActive) =>
              isActive ? "text-white" : "text-blue-500 hover:text-red-500"
            }
          >
            <Icon className="w-5 h-5 text-blue-500 hover:hover:text-red-500" />
          </NavLink>
        );
      })}
    </section>
  );
};

export default SideBar;
