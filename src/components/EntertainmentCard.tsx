
import type {
  EntertainmentCardStyle,
  EntertainmentCard as EntertainmentCardType,
} from "../types/entertainment";
import BookmarkedButton from "./BookmarkedButton";
import Icons from "./Icons";

const EntertainmentCard = ({
  title,
  category,
  isBookmarked,
  isTrending,
  rating,
  thumbnail,
  year,
  id,
  onChangeBookmark,
}: EntertainmentCardType) => {
  const cardStyle: EntertainmentCardStyle = {
    "--bg-small": `url(${thumbnail.trending?.small})`,
    "--bg-large": `url(${thumbnail.trending?.large})`,
  };

  const onToggleBookmark = (id: number) => {
    onChangeBookmark(id);
  };

  return (
    <>
      {isTrending ? (
        <div
          style={cardStyle}
          className="bg-[image:var(--bg-small)] md:bg-[image:var(--bg-large)] lg:bg-[image:var(--bg-large)] bg-cover rounded-lg"
        >
          <div className="p-2 min-w-60 min-h-35 flex flex-col justify-between ">
            <div className="ml-auto">
              <BookmarkedButton
                onToggleBookmark={() => onToggleBookmark(id)}
                isBookmarked={isBookmarked}
              />
            </div>

            <div className="pb-1.5 pl-2">
              <div className="flex gap-1.5 items-center">
                {year} • <Icons category={category} /> {category} • {rating}
              </div>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>Arrumar isso</div>
      )}
    </>
  );
};

export default EntertainmentCard;
