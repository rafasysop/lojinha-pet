import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CardProduct({ title, img, price }) {
  return (
    <div className="card-content">
      <img
        className="product-img"
        src={img}
        alt={title.substr(0, 22) + '...'}
      />
      <h2 className="product-title">{title}</h2>
      <div className="price">
        {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
