import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  return (
    <div className="center">
      <input
        className="search"
        value={searchValue}
        placeholder="Buscar TODO"
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
    </div>
  );
}

export {TodoSearch};
