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
  const isTrendingVariant = variant === "trending";
  const cardStyle: EntertainmentCardStyle = {
    "--bg-small": `url(${
      isTrendingVariant ? movie.thumbnail.trending?.small : movie.thumbnail.regular.small
    })`,
    "--bg-large": `url(${
      isTrendingVariant ?movie.thumbnail.trending?.large : movie.thumbnail.regular.large
    })`,
  };

  const onToggleBookmark = (id: number) => {
    onChangeBookmark(id);
  };

  return (
    <>
      {variant === "trending" ? (
        <div
          style={cardStyle}
          className="bg-[image:var(--bg-small)] md:bg-[image:var(--bg-large)] lg:bg-[image:var(--bg-large)] bg-cover rounded-lg"
        >
          <div className="p-2 min-w-60 min-h-35 flex flex-col justify-between ">
            <div className="ml-auto">
              <BookmarkedButton
                onToggleBookmark={() => onToggleBookmark(movie.id)}
                isBookmarked={movie.isBookmarked}
              />
            </div>

            <div className="pb-1.5 pl-2 text-white">
              <div className="flex gap-1.5 items-center text-preset-5-mobile">
                {movie.year} • <Icons category={movie.category} /> {movie.category} • {movie.rating}
              </div>
              <h2 className="text-preset-3-mobile">{movie.title}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={cardStyle}
            className="w-[164px] min-h-[110px] bg-[image:var(--bg-small)] md:bg-[image:var(--bg-large)] lg:bg-[image:var(--bg-large)] bg-cover rounded-lg"
          ></div>
          <div className="pb-1.5 pl-2">
            <div className="flex gap-1.5 items-center">
              {movie.year} • <Icons category={movie.category} /> {movie.category} • {movie.rating}
            </div>
            <h2>{movie.title}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default EntertainmentCard;
