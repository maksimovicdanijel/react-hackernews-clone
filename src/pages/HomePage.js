import React, { Component } from 'react';
import Helmet from 'react-helmet';

import articleService from '../services/ArticleService';
import ListItemContainer from '../components/ListItemContainer';
import Loader from '../components/Loader';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    articleService.fetchHomePage()

      .then(articles => {
        this.setState({ items: articles });
      });
  }

  renderList() {
    return (
      <ListItemContainer items={ this.state.items } />
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Hackernews client</title>
        </Helmet>

        { this.state.items.length ? this.renderList() : <Loader /> }
      </div>
    );
  }
}

export default HomePage;