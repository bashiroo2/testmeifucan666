import "./moviecard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ ele }) {
  return (
    // Link component for movie details page navigation
    <Link to={`/movie/${ele.title}`} style={{ textDecoration: "none" }}>
      <div className="MovieCard">
        <div>
          <div className="upper ">
            <img className="img" src={ele.img} alt={ele.title} />
          </div>
          <div>
            <h2>{ele.title}</h2>
            <p>{ele.description}</p>
            <h3>Rate: {ele.rating}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
