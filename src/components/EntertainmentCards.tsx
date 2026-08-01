import type { EntertainmentCardsProps } from "../types/entertainment";
import EntertainmentCard from "./EntertainmentCard";

const EntertainmentCards = ({ movies, onChangeBookmark }: EntertainmentCardsProps) => {

  return (
    <div className="flex gap-4">
      {movies.map((movie) => (
        <EntertainmentCard key={movie.id} {...movie} onChangeBookmark={onChangeBookmark}/>
      ))}
    </div>
  );
};

export default EntertainmentCards;
