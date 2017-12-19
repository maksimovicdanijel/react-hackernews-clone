import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';

import HomePage from './pages/Home';

import PageHeader from './components/PageHeader';

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageHeader></PageHeader>

        <Container>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/top' render={(() => 'top page')}></Route>
        </Container>
      </div>
    );
  }
}

export default App;
