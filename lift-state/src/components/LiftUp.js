import React, { useState } from 'react';

const Search = ({ query, handleQuery, children }) => {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const LiftUp = ({ list }) => {
  const [query, setQuery] = useState('');

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div>
      <h2>LiftUp</h2>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={filteredList} />
    </div>
  );
};

export default LiftUp;
