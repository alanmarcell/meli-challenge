import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './routes';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
