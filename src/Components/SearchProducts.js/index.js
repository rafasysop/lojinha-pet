import React, { useContext } from 'react';
import { productsCtx } from '../../context/productsContext';
import './style.css';
import { FaSearch } from 'react-icons/fa';

function SearchProducts() {
  const { filterProduct, setFilterProduct, search } = useContext(productsCtx);
  return (
    <>
      <input
        className="input-search"
        type="search"
        placeholder="O que você procura?"
        value={filterProduct}
        onChange={({ target: { value } }) => setFilterProduct(value)}
        onKeyPress={({ key }) => key === 'Enter' && search()}
      />
      <button className="search-btn" type="button" onClick={search}>
        <FaSearch style={{ fontSize: '20px' }} />
      </button>
    </>
  );
}

export default SearchProducts;
