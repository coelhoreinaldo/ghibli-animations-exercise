import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Home() {
  const { films } = useContext(FilmsContext);
  return (
    <>
      <Header />
      <h1>Films</h1>
      {
        films.map((film) => (
          <div key={ film.id }>
            <h2>{film.title}</h2>
            <img src={ film.image } alt={ film.title } />
            <p>{film.description}</p>
            <button>Favoritar</button>
          </div>
        ))
      }
    </>
  );
}
