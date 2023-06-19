import {useState,useEffect} from 'react';
import AddMovie from "./Components/AddMovie";
import "./App.css";
import MovieList from './Components/MovieList.js';
import Filtring from './Components/Filtring.js';

const info = [
        {
      title: 'Inception',
      img: 'https://cinedweller.com/wp-content/uploads/2019/12/Inception-teaser-1000.jpg',
      description: 'A skilled thief who steals corporate secrets by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a seemingly impossible task: "inception".',
      rating: 8.8
    },
    {
      title: 'Purple Hearts',
      img: 'https://occ-0-1647-1168.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSKftikf9jXTrbv1k8Kb-wW5Xwc1MVkJOHaA4zbH7zBeQqats8EXhLHmqjRabS_N9caM_u3zuLZdtMPmjpHpZy8rHfUi-2roS2HAX6304DLVu_GS6FEJbX5A9P21Z1fYv-Ynkw.jpg',
      description: 'In spite of their many differences, Cassie, a struggling singer-songwriter, and Luke, a troubled Marine, agree to marry solely for military benefits. But when tragedy strikes, the line between real and pretend begins to blur.',
      rating: 9.9
    },
    {
      title: 'Fast & Furious X',
      img: 'https://www.themoviedb.org/t/p/original/7Br9F8EHrtNT2hFgD5oTfDMRgud.jpg',
      description: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.',
      rating: 8.9
    }
 ];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;