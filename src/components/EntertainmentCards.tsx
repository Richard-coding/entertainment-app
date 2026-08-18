import type { EntertainmentCardsProps } from "../types/entertainment";
import EntertainmentCard from "./EntertainmentCard";

const EntertainmentCards = ({
  movies,
  onChangeBookmark,
  variant,
}: EntertainmentCardsProps) => {
  if (variant === "trending") {
    return (
      <div
        className="
          flex w-full min-w-0 flex-nowrap gap-4 overflow-x-auto pb-1
          md:gap-8
          lg:gap-10
          [&::-webkit-scrollbar]:hidden
        "
      >
        {movies.map((movie) => (
          <EntertainmentCard
            key={movie.id}
            movie={movie}
            onChangeBookmark={onChangeBookmark}
            variant="trending"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="
        grid w-full min-w-0 grid-cols-2 gap-4
        md:grid-cols-3 md:gap-x-7 md:gap-y-6
        lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8
      "
    >
      {movies.map((movie) => (
        <EntertainmentCard
          key={movie.id}
          movie={movie}
          onChangeBookmark={onChangeBookmark}
          variant="regular"
        />
      ))}
    </div>
  );
};

export default EntertainmentCards;
