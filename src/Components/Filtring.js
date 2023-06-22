import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";

export default function Filtring({ filter }) {
  // Ref to store input field reference
  let searchRef = useRef();

  // State variable to store the rating
  const [rate, setRate] = useState(0);

  // Function to handle rating change
  const ratingChanged = (newRating) => {
    // Call the filter function with the search value and new rating
    filter(searchRef.current.value, newRating);
    setRate(newRating);
  };

  // Function to handle form submission
  function submitted(ev) {
    ev.preventDefault();
    // Call the filter function with the search value and current rating
    filter(searchRef.current.value, rate);
  }

  return (
    <form className="searchform" onChange={submitted} onSubmit={submitted}>
      <h3>Search</h3>
      <input
        ref={searchRef}
        className="search"
        type="text"
        placeholder="movie name"
        aria-label=".form-control-lg example"
      />

      {/* Rating component */}
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        isHalf={true}
        activeColor="#ffd700"
      />
    </form>
  );
}
