import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

function FilmProvider({ children }) {
  const [films, setFilms] = useState([]);

  const fetchApi = async () => {
    const API_URL = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';
    const response = await fetch(API_URL);
    const data = await response.json();
    setFilms(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (film) => {
    if (!favorites.includes(film)) {
      setFavorites((prev) => [...prev, film]);
    } else {
      setFavorites((prev) => prev.filter((e) => e !== film));
    }
  };
  return (
    <FilmsContext.Provider value={ { films, favorites, handleFavorites } }>
      {children}
    </FilmsContext.Provider>
  );
}

FilmProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FilmProvider;
