import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    // Routes allow to render any first match.
    // Gives more performance and more control over the code.

    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/shop" element={<ShopPage />} />
    </Routes>

  );
}

export default App;
