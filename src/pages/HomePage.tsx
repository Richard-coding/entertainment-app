import data from "../../data.json";
import EntertainmentCards from "../components/EntertainmentCards";
import type { EntertainmentCard } from "../types/entertainment";

const movies: EntertainmentCard[] = data as EntertainmentCard[];

const Home = () => {
  return (
    <div>
      <EntertainmentCards movies={movies} />
    </div>
  );
};

export default Home;
