import type { EntertainmentCard } from "../types/entertainment";

const EntertainmentCard = ({
  title,
  category,
  isBookmarked,
  isTrending,
  rating,
  thumbnail,
  year,
}: EntertainmentCard) => {
  return (
    <div>
      <p>
        {isBookmarked} {isTrending}
      </p>
      <img src={thumbnail.regular.large} alt="" />
      <p>
        {year} {category} {rating}
      </p>
      <h2>{title}</h2>
    </div>
  );
};

export default EntertainmentCard;
