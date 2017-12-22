import React, { Component } from 'react';
import Helmet from 'react-helmet';

import articleService from '../services/ArticleService';

import ListItemContainer from '../components/ListItemContainer';

class RecentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  } 

  componentDidMount() {
    articleService.fetchRecentArticles()
    
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

        { this.state.items.length ? this.renderList() : 'Loading...' }
      </div>
    );
  }
}

export default RecentPage;