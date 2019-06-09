import './App.css';
import React from 'react';
import { Container } from 'reactstrap';

import AppRouter from './AppRouter';

const App = () => (
  <div className='app-root'>
    <Container fluid>
      <AppRouter/>
    </Container>
  </div>
);

export default App;
