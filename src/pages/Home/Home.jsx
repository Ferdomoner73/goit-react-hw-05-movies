import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../api/data';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      console.log(response.results);
      setData(response.results);
    });
  }, []);

  return (
    <>
      <div>Hello</div>
      <ul>
        {data.map(trendingMovie => {
          return (
            trendingMovie.original_title && (
              <li key={trendingMovie.id}>
                <Link to={`movies/${trendingMovie.id}`} id={trendingMovie.id}>
                  {trendingMovie.original_title}
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};
