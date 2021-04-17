import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';

// import { div, H1Styled, HeaderStyled, Img, Paragraph } from './styles';
import './style.css';
import { FaShoppingCart } from 'react-icons/fa';
import { marketCtx } from '../../context/marketContext';

function Header() {
  const { market } = useContext(marketCtx);
  console.log('maeket', market);
  const totalPrice = market?.reduce(
    (total, item) => total + +item.price * item.numberAddProduct,
    0,
  );
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-info">
        <div className="title-header">
          <h1>Pet Friends Acessories</h1>
          <span className="header-open">Aberto Agora</span>
        </div>
        <p>
          Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa -
          PB
        </p>
        <ul className="header-delivery">
          <li>
            <strong>Delivery:</strong> 35m - 1h:40m
          </li>
          <li>
            <strong>Entrega:</strong> À partir de R$ 3,00
          </li>
        </ul>
      </div>
      <div className="market">
        <div>
          <FaShoppingCart
            style={{
              cssFloat: 'left',
              marginRight: '5px',
            }}
          />
          <div>
            <p>
              {
                market.filter(
                  (item, index, self) =>
                    index === self.findIndex((t) => t.id === item.id),
                ).length
              }{' '}
              Produtos no Carrinho
            </p>
            <p className="total-price">
              <strong>
                {market &&
                  totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
