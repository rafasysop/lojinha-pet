import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const InitialState = [];

export const marketCtx = createContext(InitialState);

const MarketContext = ({ children }) => {
  const [market, setMarket] = useState(InitialState);

  return <marketCtx.Provider value={{ market }}>{children}</marketCtx.Provider>;
};

MarketContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MarketContext;
