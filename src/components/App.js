import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'milligram/dist/milligram.min.css';

import { Boundary } from './';
import routes from '../pages/routes';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Boundary>
      <Router>{routes}</Router>
    </Boundary>
  </Provider>
);

export default App;
