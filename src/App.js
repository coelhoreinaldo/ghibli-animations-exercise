import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmProvider from './context/FilmProvider';

function App() {
  return (

    <FilmProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmProvider>
  );
}

export default App;
