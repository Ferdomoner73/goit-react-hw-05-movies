import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchEachMovie } from '../../api/data';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchEachMovie(movieId).then(response => {
      setMovieInfo(response);
      console.log(response);
    });
  }, [movieId]);

  return (
    <>
      <div>
        <img
          src={
            movieInfo.poster_path &&
            `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
          }
          alt="Film poster"
        />
        <div>
          <h2>{movieInfo?.original_title}</h2>
          <p>User score: {movieInfo.vote_average?.toFixed(1)}</p>
          <ul>
            <li>
              <h3>Overview</h3>
              <p>{movieInfo?.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {movieInfo.genres?.map(genre => {
                  return <li key={genre?.id}>{genre?.name}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
