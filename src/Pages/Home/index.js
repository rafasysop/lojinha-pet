import React from 'react';
import ContentProducts from '../../Components/ContentProducts';
import FilterByCategory from '../../Components/FilterByCategory';
import Header from '../../Components/Header';
import './style.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <FilterByCategory />
      <main className="main-container">
        <ContentProducts />
      </main>
    </div>
  );
}

export default Home;
