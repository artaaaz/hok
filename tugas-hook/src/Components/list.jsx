import React from 'react';

function List({ getItems }) {
  console.log('🔄 List render');
  const items = getItems();

  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default React.memo(List);