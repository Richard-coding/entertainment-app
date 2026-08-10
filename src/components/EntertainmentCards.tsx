import type { EntertainmentCardsProps } from "../types/entertainment";
import EntertainmentCard from "./EntertainmentCard";

const EntertainmentCards = ({ movies, onChangeBookmark, variant }: EntertainmentCardsProps) => {

  return (
    <div className="flex gap-4">
      {movies.map((movie) => (
        <EntertainmentCard key={movie.id} movie={movie} onChangeBookmark={onChangeBookmark} variant={variant}/>
      ))}
    </div>
  );
};

export default EntertainmentCards;
