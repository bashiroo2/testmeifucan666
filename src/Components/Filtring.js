import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";


export default function Filtring({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);
    
    const ratingChanged = (newRating) => {
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };


    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }


    return (
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <h3> Search </h3>
            <input ref={searchRef} className="search" type="text" placeholder="movie name" aria-label=".form-control-lg example" />

            
            <ReactStars count={5}
                            onChange={ratingChanged}
                            size={30}
                            isHalf={true}
                            activeColor="#ffd700"/>
        </form>
    )
}
