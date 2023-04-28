import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from '../context/FilmsContext';

function FilmCard({ film }) {
  const { handleFavorites, favorites } = useContext(FilmsContext);
  const isFavorite = favorites.includes(film);
  return (
    <div className="film-card">
      <h4 className="film-title">{film.title}</h4>
      <img src={ film.image } alt={ film.title } className="film-image" />
      <button onClick={ () => handleFavorites(film) }>
        {
          isFavorite
            ? <i className="ri-heart-fill icon favorite " />
            : <i className="ri-heart-fill icon unfavorite" />
        }

      </button>
      <p className="film-description">{film.description}</p>
    </div>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FilmCard;
