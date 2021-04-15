import React, { useContext } from 'react';
import { productsCtx } from '../../context/productsContext';
import CardProduct from '../CardProduct/CardProduct';
import SearchProducts from '../SearchProducts.js';
import './style.css';

function ContentProducts() {
  // <CardProduct img={img} title={title} />
  const { listProducts, category } = useContext(productsCtx);
  return (
    <div className="cards">
      {listProducts ? (
        <>
          <SearchProducts />
          <h1 className="title-page">{category}</h1>
          <div className="card-container">
            {listProducts.map((item, index) => {
              if (index > 10) return;
              return (
                <CardProduct
                  key={item.id}
                  title={item.title}
                  img={item.thumbnail}
                  price={item.price}
                />
              );
            })}
          </div>
        </>
      ) : (
        'Nenhum Produto cadastrado'
      )}
    </div>
  );
}

export default ContentProducts;
