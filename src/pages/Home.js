import React, { Component } from 'react';
import Helmet from 'react-helmet';

import articleService from '../services/ArticleService';
import ListItemContainer from '../components/ListItemContainer';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null
    };
  }

  componentDidMount() {
    articleService.fetchArticle()

      .then(article => {
        this.setState({ article: article });
      });
  }

  renderList() {
    const items = [
      this.state.article,
      this.state.article
    ];

    return (
      <ListItemContainer items={ items } />
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Hackernews client</title>
        </Helmet>

        { this.state.article ? this.renderList() : 'Loading...' }
      </div>
    );
  }
}

export default HomePage;