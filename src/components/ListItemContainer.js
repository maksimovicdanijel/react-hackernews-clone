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
      let { objectID, author, title, url, points, created_at_i } = item;

      return <ListItem key={ objectID } author={ author } title={ title } url={ url } points={ points } time={ created_at_i } />;
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