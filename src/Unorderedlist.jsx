import React from 'react';

const UnorderedList = () => {
  const items = ['Item A', 'Item B', 'Item C', 'Item D'];

  return (
    <div>
      <h3>My Unordered List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
