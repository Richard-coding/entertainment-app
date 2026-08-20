import type {
  EntertainmentCardProps,
  EntertainmentCardStyle,
} from "../types/entertainment";
import BookmarkedButton from "./BookmarkedButton";
import Icons from "./Icons";
import PlayIcon from "../assets/icons/icon-play.svg";
const EntertainmentCard = ({
  movie,
  onChangeBookmark,
  variant,
}: EntertainmentCardProps) => {
  const isTrending = variant === "trending";

  const cardStyle: EntertainmentCardStyle = {
    "--bg-small": `url(${
      isTrending
        ? movie.thumbnail.trending?.small
        : movie.thumbnail.regular.small
    })`,
    "--bg-large": `url(${
      isTrending
        ? movie.thumbnail.trending?.large
        : movie.thumbnail.regular.large
    })`,
  };

  if (isTrending) {
    return (
      <article
        style={cardStyle}
        className="relative flex h-[140px] w-[240px] shrink-0 flex-col justify-between overflow-hidden rounded-lg bg-[image:var(--bg-small)] bg-cover bg-center p-2
 md:h-[230px] md:w-[470px] md:bg-[image:var(--bg-large)] md:p-4
group"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 cursor-pointer">
          <div className="flex items-center text-white gap-4 border border-none rounded-[28.5px] p-[9px_27px_9px_9px]  bg-white/25">
            <img
              src={PlayIcon}
              alt="Play"
              className="w-28 h-12 md:w-auto md:h-auto"
            />
            <p className="text-preset-3-mobile md:text-preset-3 lg:text-preset-3">
              Play
            </p>
          </div>
        </div>

        <div className="ml-auto">
          <BookmarkedButton
            onToggleBookmark={() => onChangeBookmark(movie.id)}
            isBookmarked={movie.isBookmarked}
          />
        </div>

        <div className="text-white">
          <div
            className="
              mb-1 flex items-center gap-2
              text-preset-5-mobile opacity-75
              md:text-preset-4
            "
          >
            <span>{movie.year}</span>
            <span>•</span>

            <span className="flex items-center gap-1.5">
              <Icons category={movie.category} />
              {movie.category}
            </span>

            <span>•</span>
            <span>{movie.rating}</span>
          </div>

          <h2 className="text-preset-3-mobile md:text-preset-2-medium">
            {movie.title}
          </h2>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full min-w-0">
      <div
        style={cardStyle}
        className="relative mb-2 flex aspect-[164/110] w-full min-w-0 rounded-lg bg-[image:var(--bg-small)] bg-cover bg-center p-2 md:aspect-[280/174] md:bg-[image:var(--bg-large)] group
        "
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 cursor-pointer">
          <div className="flex items-center text-white gap-4 border border-none rounded-[28.5px] p-[9px_27px_9px_9px]  bg-white/25">
            <img
              src={PlayIcon}
              alt="Play"
              className="w-28 h-12 md:w-auto md:h-auto"
            />
            <p className="text-preset-3-mobile md:text-preset-3 lg:text-preset-3">
              Play
            </p>
          </div>
        </div>

        <div className="ml-auto">
          <BookmarkedButton
            onToggleBookmark={() => onChangeBookmark(movie.id)}
            isBookmarked={movie.isBookmarked}
          />
        </div>
      </div>

      <div
        className="
          mb-1 flex items-center gap-1.5
          text-preset-6-mobile opacity-75
          md:text-preset-5
        "
      >
        <span>{movie.year}</span>
        <span>•</span>

        <span className="flex items-center gap-1.5">
          <Icons category={movie.category} />
          {movie.category}
        </span>

        <span>•</span>
        <span>{movie.rating}</span>
      </div>

      <h2 className="text-preset-4-mobile md:text-preset-3">{movie.title}</h2>
    </article>
  );
};

export default EntertainmentCard;
