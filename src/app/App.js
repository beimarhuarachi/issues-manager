import './App.css';
import React from 'react';
import { Container } from 'reactstrap';

import AppRouter from './AppRouter';
import Header from './common/Header';

const App = () => (
  <div className='app-root'>
    <div className='app-root__header'>
      <Header/>
    </div>
    <Container fluid>
      <AppRouter/>
    </Container>
  </div>
);

export default App;
