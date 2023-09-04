import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEachMovieCast } from '../../api/data';

export const Cast = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchEachMovieCast(movieId).then(response => {
      setData(response);
    });
  }, []);

  return (
    <>
      {data?.map(eachActor => {
        return (
          <li key={eachActor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${eachActor.profile_path}`}
              alt="Actor"
            />
            <p>{eachActor.original_name}</p>
            <p>{eachActor.character}</p>
          </li>
        );
      })}
    </>
  );
};
