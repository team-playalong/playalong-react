import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import ChordSearchPage from './containers/ChordSearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChordSearchPage} />
    <Route path="home" component={HomePage} />
    <Route path="fuel-savings" component={FuelSavingsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
