import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const { favorites, handleFavorites } = useContext(FilmsContext);

  return (
    <>
      <Header />
      <h1>Favorites</h1>
      {favorites.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <button onClick={ () => handleFavorites(film) }>Desfavoritar</button>
        </div>
      ))}
    </>
  );
}
