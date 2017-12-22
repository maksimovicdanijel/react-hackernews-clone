import React from 'react';
import { Route } from 'react-router-dom';

import Container from './components/Container';
import HomePage from './pages/HomePage';
import TopPage from './pages/Top';
import RecentPage from './pages/RecentPage';

let Main = () => {
  return (
    <div className='main' style={{ marginTop: '20px', paddingBottom: '20px' }}>
      <Container>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/top' component={ TopPage } />
        <Route exact path='/recent' component={ RecentPage } />
      </Container>
    </div>
  );
};

export default Main;