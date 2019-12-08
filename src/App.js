import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import './App.css';
import Home from './screens/home';
import Album from './screens/Album';
import Song from './screens/Song';

function App() {
  return (
    <ConnectedRouter history={history}>
    <Fragment>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/album">
        <Album />
      </Route>
      <Route path="/song">
        <Song />
      </Route>
    </Fragment>
  </ConnectedRouter>
  );
}

export default App;
