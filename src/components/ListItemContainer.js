import React, { Component } from 'react';

import ListItem from './ListItem';

class ListItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  renderItems = () => {
    if (! this.props.items || ! this.props.items.length) {
      return (<div>No articles</div>);
    }

    const listItems = this.props.items.map((item) => {
      let { id, by, title, url, score, time } = item;

      return <ListItem key={ id } by={ by } title={ title } url={ url } score={ score } time={ time } />;
    });

    return listItems;
  }

  render() {
    return (
      <div className="list-item-container">
        { this.renderItems() }
      </div>
    );
  }
}

export default ListItemContainer;