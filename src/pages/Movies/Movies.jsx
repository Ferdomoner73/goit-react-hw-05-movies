import React from 'react';
import { useState } from 'react';
import { fetchMoviesBySearchQuery } from 'api/data';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = e => {
    setSearchData(e.target.value);
    setIsSubmit(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
    fetchMoviesBySearchQuery(searchData).then(response => {
      setData(response);
    });
  };

  return (
    <>
      <form action="">
        <label>
          <input
            type="text"
            name="search"
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div>
        <ul>
          {data.results?.length === 0 && isSubmit ? (
            <p>{`There is no movies`}</p>
          ) : (
            data.results?.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} id={movie.id}>
                    {movie.title}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default Movies;
