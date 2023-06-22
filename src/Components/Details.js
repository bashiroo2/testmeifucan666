import { useParams } from 'react-router-dom';

export default function Details({movies}) {
 let { title } = useParams();
 
  const x = movies.find((x) => x.title === title);
return (
    <div>
      <h3>Movie name: {x.title}</h3>
    </div>
  );
}

