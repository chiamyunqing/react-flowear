import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user';
import { ProductsProvider } from './contexts/products';
import { CartProvider } from './contexts/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Products provider can go up and get values from User Provider, UserProvider can't go to children
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

