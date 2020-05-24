import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import FeedRoute from '../../routes/FeedRoute/FeedRoute';


import './App.scss';

const App = () => (
  <div data-testid="app">
    <BrowserRouter>
      <Topbar />
      <FeedRoute />
    </BrowserRouter>
  </div>
);

export default App;
