import React, { Component } from 'react';

class Top extends Component {
  componentWillMount() {
    document.title = 'Top items';
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <div>Top page</div>
    );
  }
}

export default Top;