import "./movielist.css";
import MovieCard from "./MovieCard";

function MovieList({ list }) {
  return (
    <div className="MovieList">
      {/* Mapping over the list array and rendering MovieCard component for each element */}
      {list.map((ele, index) => (
        <MovieCard key={index} ele={ele} />
      ))}
    </div>
  );
}

export default MovieList;
