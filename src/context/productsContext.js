import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchAllProducts } from '../services/FetchApi';

export const productsCtx = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [listProducts, setListPoducts] = useState([]);
  const [category, setCategory] = useState('Sugestão do Vendedor');
  const [filterProduct, setFilterProduct] = useState('');
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetails, setProductDetails] = useState('');

  const handleShowProductDetails = (id) => {
    setShowProductDetails((c) => !c);
    if (!showProductDetails) {
      setProductDetails(id);
    } else {
      setProductDetails('');
    }
  };

  useEffect(() => {
    const exec = async () => {
      const products = await searchAllProducts();
      setProducts(products);
    };
    exec();
  }, []);

  useEffect(() => {
    console.log(category);
    if (category === 'Sugestão do Vendedor') {
      console.log('setList');
      setListPoducts(
        products.filter((item) => item.installments?.rate >= 13.9),
      );
      return;
    }
    setListPoducts(products.filter((item) => item.category_lj === category));
  }, [category, products]);

  const search = () => {
    if (filterProduct === '' && category === 'Sugestão do Vendedor') {
      setListPoducts(
        products.filter((item) => item.installments?.rate >= 13.9),
      );
      return;
    }

    if (filterProduct === '') {
      setListPoducts(products.filter((item) => item.category_lj === category));
      return;
    }
    setListPoducts(
      listProducts.filter((item) =>
        item.title.toLowerCase().includes(filterProduct.toLowerCase()),
      ),
    );
  };

  return (
    <productsCtx.Provider
      // value={(category, products, listProducts, setCategory)}
      value={{
        category,
        products,
        listProducts,
        setCategory,
        filterProduct,
        handleShowProductDetails,
        showProductDetails,
        productDetails,
        setFilterProduct,
        search,
      }}
    >
      {children}
    </productsCtx.Provider>
  );
};

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
