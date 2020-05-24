import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import TVSeries from './pages/TVSeries';
import Movie from './pages/Movie';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/show" component={TVSeries} />
      <Route exact path="/movie" component={Movie} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
