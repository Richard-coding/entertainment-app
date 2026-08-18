import HomeIcon from "../assets/icons/icon-nav-home.svg?react";
import MoviesIcon from "../assets/icons/icon-nav-movies.svg?react";
import TvSeriesIcon from "../assets/icons/icon-nav-tv-series.svg?react";
import BookmarkIcon from "../assets/icons/icon-nav-bookmark.svg?react";
import { NavLink } from "react-router";
import type { SidebarItem } from "../types/entertainment";

const SideBar = () => {
  const sidebar: SidebarItem[] = [
    { icon: HomeIcon, link: "/" },
    { icon: MoviesIcon, link: "/movies" },
    { icon: TvSeriesIcon, link: "/tv-series" },
    { icon: BookmarkIcon, link: "/bookmarked" },
  ];

  return (
    <nav className="flex flex-1 items-center justify-center gap-6 md:gap-8 lg:flex-col lg:gap-10">
      {sidebar.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.link}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-blue-500 transition-colors hover:text-red-500"
            }
          >
            <span className="flex h-5 w-5 items-center justify-center">
              <Icon className="h-5 w-5" />
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SideBar;
