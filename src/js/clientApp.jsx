import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

import '../scss/styles.scss';

const renderApp = () => {
  render(
    <Router>
      <Route path="/" component={App} />
    </Router>,

    document.getElementById('app')
  );
};

renderApp();
