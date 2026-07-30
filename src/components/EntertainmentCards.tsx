import type { EntertainmentCardsProps } from "../types/entertainment";
import EntertainmentCard from "./EntertainmentCard";

const EntertainmentCards = ({ movies }: EntertainmentCardsProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <EntertainmentCard key={movie.title} {...movie} />
      ))}
    </div>
  );
};

export default EntertainmentCards;
