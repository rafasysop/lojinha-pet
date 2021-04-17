import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { productsCtx } from '../../context/productsContext';

import './style.css';
import { marketCtx } from '../../context/marketContext';

function ProductDetails({ id }) {
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const { listProducts } = useContext(productsCtx);
  const { addProductToCart } = useContext(marketCtx);
  const product = listProducts.filter((item) => item.id === id)[0];

  return (
    <div className="product-details">
      <div className="product-details-img-container">
        <img
          className="product-details-img"
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p>
          {product.description.substr(0, 200)} <a href="#">Ver Mais...</a>{' '}
        </p>

        <span className="obs">Observações:</span>
        <textarea className="obs-textarea"></textarea>
        <div className="buttons-add-cart-container">
          <div className="control-number-products">
            <button
              onClick={() =>
                setNumberOfProduct((c) => {
                  if (c <= 1) return c;
                  return c - 1;
                })
              }
            >
              -
            </button>
            <span className="number-products">{numberOfProduct}</span>
            <button
              onClick={() =>
                setNumberOfProduct((c) => {
                  if (c >= 10) return c;
                  return c + 1;
                })
              }
            >
              +
            </button>
          </div>
          <button
            onClick={() =>
              addProductToCart({
                ...product,
                numberAddProduct: numberOfProduct,
              })
            }
            className="button-add-cart"
          >
            <span>Adicionar</span>
            <span>
              {(product.price * numberOfProduct).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
