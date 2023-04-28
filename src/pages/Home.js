import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import './Home.css';
import FilmCard from '../components/FilmCard';

export default function Home() {
  const { films } = useContext(FilmsContext);

  return (
    <>
      <Header />
      <h1>Films</h1>
      <section className="films">
        {
          films.map((film) => (
            <FilmCard
              key={ film.id }
              film={ film }
            />
          ))
        }
      </section>
    </>
  );
}
