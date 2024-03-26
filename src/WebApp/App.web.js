import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import NoPage from './Screens/NoPage';
import ProductList from './Screens/ProductList';
import Cart from './Screens/cart';
import {Provider} from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
