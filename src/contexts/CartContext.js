import React, {createContext, useState, useEffect} from 'react';

//Crear context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Estado del Carrito
  const [cart, setCart] = useState([]);
  //Estado de la cantidad del articulo
  const [itemAmount, setItemAmount] = useState(0);
  //Estado de precio total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0);
    setTotal(total);
  });

  //Actualizar contador 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount; 
      }, 0); 
      setItemAmount(amount);
    }
  }, [cart]);

  //Agregar al carrito
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    //Verficar si el articulo se agrego al carrito
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //Si cart item es agregado al carrito
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  };

  //Eliminar desde el carrito
  const removeFromCart = (id) => {
    const newCart = cart.filter (item =>  {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  //Incrementar cantidad
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //Reducir cantidad
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } 
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,
    increaseAmount, decreaseAmount, itemAmount, total, }}>
       {children}
    </CartContext.Provider>
  );
};

export default CartProvider;