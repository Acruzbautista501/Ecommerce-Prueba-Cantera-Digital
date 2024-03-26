import React, {createContext, useState, useEffect} from 'react';

//Crear context
export const ProductoContext = createContext ();

const ProductoProvider = ({ children }) => {
  //Estado de los productos
  const [productos, setProductos] = useState([])
  //fetch productos
  useEffect(()=> {
    const fetchProductos = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductos(data);
    };
    fetchProductos();
  }, [])
  return (<ProductoContext.Provider value={{ productos }}>{children}</ProductoContext.Provider>);
};

export default ProductoProvider;
