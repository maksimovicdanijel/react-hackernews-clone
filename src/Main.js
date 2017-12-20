import React from 'react';
import { Route } from 'react-router-dom';

import Container from './components/Container';
import HomePage from './pages/Home';
import TopPage from './pages/Top';

let Main = () => {
  return (
    <div className="main" style={{ marginTop: '20px' }}>
      <Container>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/top" component={ TopPage }></Route>
      </Container>
    </div>
  );
};

export default Main;