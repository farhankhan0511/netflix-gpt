import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const  movieNames = useSelector((store) => store?.GptSearch?.movieNames);
  const  movieResults = useSelector((store) => store?.GptSearch?.movieResults);
  
  if (!movieNames) return null;

  return (
    <div className=" bg-black text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;