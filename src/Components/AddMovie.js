import "./addmovie.css";
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";

export default function AddMovie({ adding, newmovie }) {
  // Refs to store input field references
  let titleRef = useRef();
  let imgurlRef = useRef();
  let traileref = useRef();
  let descRef = useRef();

  // State variable to store the rating
  let [rate, setRate] = useState(0);

  // Function to handle rating change
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };

  // Function to handle form submission
  function submitted(ev) {
    ev.preventDefault();
    let movieObject = {
      title: titleRef.current.value,
      img: imgurlRef.current.value,
      description: descRef.current.value,
      trailer: traileref.current.value,
      rating: rate,
    };
    adding(movieObject);
  }

  return (
    <div className="AddMovie">
      <form onSubmit={submitted}>
        {/* Title */}
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              name="title"
              ref={titleRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Title"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Image URL
          </label>
          <div className="col-sm-10">
            <input
              ref={imgurlRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="image url"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="input-group">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea
              ref={descRef}
              className="form-control"
              aria-label="With textarea"
              placeholder="Movie description"
              required
            ></textarea>
          </div>
        </div>

        {/* Trailer URL */}
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Trailer
          </label>
          <div className="col-sm-10">
            <input
              ref={traileref}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="trailer url"
              required
            />
          </div>
        </div>

        {/* Rating */}
        <div className="rating-container" required>
          <h3 className="rating-title">Rating:</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
