import type {
  EntertainmentCardProps,
  EntertainmentCardStyle,
} from "../types/entertainment";
import BookmarkedButton from "./BookmarkedButton";
import Icons from "./Icons";

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
        className=" relative flex h-[140px] w-[240px] shrink-0 flex-col justify-between overflow-hidden rounded-lg bg-[image:var(--bg-small)] bg-cover bg-center p-2
 md:h-[230px] md:w-[470px] md:bg-[image:var(--bg-large)] md:p-4
        "
      >
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
        className="mb-2 flex aspect-[164/110] w-full min-w-0 rounded-lg bg-[image:var(--bg-small)] bg-cover bg-center p-2 md:aspect-[280/174] md:bg-[image:var(--bg-large)]
        "
      >
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
