import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { FaCartPlus } from 'react-icons/fa';
import { productsCtx } from '../../context/productsContext';

function CardProduct({ id, title, img, price, discount }) {
  const { handleShowProductDetails } = useContext(productsCtx);
  return (
    <div className="card-content">
      <img
        className="product-img"
        src={img}
        alt={title.substr(0, 22) + '...'}
      />
      <h2 className="product-title">{title}</h2>
      {discount ? (
        <div className="price">
          <p>
            <span className="precede-preco">De:</span>{' '}
            <span className="desconto">
              {price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <br />
            <span className="precede-preco">Por:</span>{' '}
            {(price - (price * discount) / 100).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <FaCartPlus
            className="cart-buy-icon"
            onClick={() => handleShowProductDetails(id)}
          />
        </div>
      ) : (
        <div className="price">
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
          <FaCartPlus
            className="cart-buy-icon"
            onClick={() => handleShowProductDetails(id)}
          />
        </div>
      )}
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default CardProduct;
