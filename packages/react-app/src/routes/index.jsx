import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from 'react-router-dom';

import React from 'react';

import HomeScene from '../scenes/Home';
import SearchResultsScene from '../scenes/SearchResults';
import ItemDetailsScene from '../scenes/ItemDetails';
import AppBar from '../components/AppBar';
import RouteContext from './RouteContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Routes = () => {
  const initialUrlSearchParam = useQuery().get('search') || '';
  console.log('>>>initialUrlSearchParam');
  console.log(initialUrlSearchParam);
  const [urlSearchParam, setUrlSearchParam] = React.useState(
    initialUrlSearchParam,
  );

  return (
    <Router>
      <RouteContext.Provider value={{ urlSearchParam, setUrlSearchParam }}>
        <AppBar />

        <Switch>
          <Route path="/items/:id">
            <ItemDetailsScene />
          </Route>
          <Route path="/items">
            <SearchResultsScene />
          </Route>
          <Route path="/" exact>
            <HomeScene />
          </Route>
        </Switch>
      </RouteContext.Provider>
    </Router>
  );
};

export default Routes;
