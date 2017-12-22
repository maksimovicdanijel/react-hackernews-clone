import React from 'react';
import moment from 'moment';

let ListItem = ({title, url, points, time, author}) => {
  let date = moment.unix(time).startOf('day').fromNow(); 

  return (
    <div className='list-item'>
      <div className='list-item__score'>{ points }</div>
      <div className='list-item__content'>
        <div className='list-item__title'><a href={ url } target='_blank'>{ title }</a></div>
        <div className='list-item__meta'>
          <span className='list-item__author'>by { author }, </span>
          <span className='list-item__time'>published { date }</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;