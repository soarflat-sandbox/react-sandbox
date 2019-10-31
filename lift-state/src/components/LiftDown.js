import React, { useState } from 'react';

const Search = ({ query, handleQuery, children }) => {
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
};

const List = ({ list }) => {
  const [archivedItems, setArchivedItems] = React.useState([]);

  const handleArchive = id => {
    setArchivedItems(archivedItems => [...archivedItems, id]);
  };

  return (
    <ul>
      {list.filter(byArchived(archivedItems)).map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>
            <button type="button" onClick={() => handleArchive(item.id)}>
              Archive
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const byArchived = archivedItems => item => !archivedItems.includes(item.id);

const LiftUp = ({ list }) => {
  const [query, setQuery] = useState('');

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div>
      <h2>LiftDown</h2>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={filteredList} />
    </div>
  );
};

export default LiftUp;
