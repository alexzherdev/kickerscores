import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App from './pages/app';
import Home from './pages/home';
import Scores from './pages/scores';
import Players from './pages/players';


const routes = ((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="scores" component={Scores} />
      <Route path="players" component={Players} />
    </Route>
  </Router>
));

export default routes;
