import React from 'react';
import { BiSearchAlt2 } from 'react-icons/all';
import './SearchBar.css';

function SearchBar({ handleChange }) {
  return (
    <div className="SearchBar">
      <div className="envolvelupa">
        <BiSearchAlt2 className="lupa" />
      </div>
      <input
        className="inputSearch"
        placeholder="Digite o local de Destino"
        onChange={(e) => handleChange(e)}
        type="text"
      />
    </div>
  );
}
export default SearchBar;
