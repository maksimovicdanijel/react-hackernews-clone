import React, { Component } from 'react';
import Helmet from 'react-helmet';

import articleService from '../services/ArticleService';

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
        console.log(this, article);
        this.setState({ article: article });
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Hackernews client</title>
        </Helmet>

        { this.state.article ? this.state.article['by'] : 'Loading...' }
      </div>
    );
  }
}

export default HomePage;