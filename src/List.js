// PlayerList.js
import React from 'react';
import './List.css';

function List({data}) {
  return (
    <section className="list">
      <div className='font-l font-500'>{data.heading}</div>
      <div className='list-content'>
        {data.list_item.map(item => (
          <div className='list-item'>
            <div className='font-s font-300'>{item.name}</div>
            <div className='font-s font-300'>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
