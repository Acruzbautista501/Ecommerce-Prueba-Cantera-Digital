import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Producto Provider
import ProductoProvider from './contexts/ProductContext';
//Sidebar Provider
import SidebarProvider from './contexts/SidebarContext';
//Carrito Provider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductoProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductoProvider>
    </CartProvider>
  </SidebarProvider>
);
