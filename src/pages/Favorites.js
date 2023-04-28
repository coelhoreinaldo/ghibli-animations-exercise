import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';
import FilmCard from '../components/FilmCard';

export default function Favorites() {
  const { favorites } = useContext(FilmsContext);

  return (
    <>
      <Header />
      <h1>Favorites</h1>
      <section className="films">
        {favorites.map((film) => (
          <FilmCard
            key={ film.id }
            film={ film }
          />
        ))}
      </section>
    </>
  );
}
