import React, { useContext } from 'react';
import ContentProducts from '../../Components/ContentProducts';
import FilterByCategory from '../../Components/FilterByCategory';
import Header from '../../Components/Header';
import { productsCtx } from '../../context/productsContext';
import './style.css';
import { IoClose } from 'react-icons/io5';
import ProductDetails from '../../Components/ProductDetails';
import Footer from '../../Components/Footer';

function Home() {
  const {
    showProductDetails,
    productDetails,
    handleShowProductDetails,
  } = useContext(productsCtx);
  return (
    <div className="home-container">
      <Header />
      <FilterByCategory />
      <main className="main-container">
        <ContentProducts />
      </main>
      <Footer />
      {showProductDetails && (
        <div className="product-details-container">
          <div className="product-details-content">
            <button
              onClick={handleShowProductDetails}
              className="product-details-close"
            >
              <IoClose className="product-details-close-icon" />
            </button>
            <ProductDetails id={productDetails} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
