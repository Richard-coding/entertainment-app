import MoviesIcon from "../assets/icons/icon-category-movie.svg?react"
import TvIcon from "../assets/icons/icon-category-tv.svg?react"
import type { IconsProps } from "../types/entertainment";

const Icons = ({ category }: IconsProps) => {
  return (
    <div >
      {category === "movie" ? (
        <MoviesIcon className="w-3 h-3 fill-blue-500" />
      ) : (
        <TvIcon className="w-3 h-3" />
      )}
    </div>
  );
};

export default Icons;
