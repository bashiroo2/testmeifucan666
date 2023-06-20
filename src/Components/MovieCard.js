import "./moviecard.css";
import {Link} from "react-router-dom";


export default function MovieCard({ ele }) {
  return (
  <Link to={`/movie/${ele.title}`} style={{textDecoration:"none"}}>
      <div className="MovieCard">
        <div>
          <div className="ppp">
            <img className="img"  src={ele.img}/>
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
