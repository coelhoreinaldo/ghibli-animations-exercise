import { Route, Switch } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';

function App() {
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
  return (
    <FilmsContext.Provider value={ { films } }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
