import React, { useContext } from 'react';
//Importar useParams
import { useParams } from 'react-router-dom';
//Importar cart context
import { CartContext } from '../contexts/CartContext';
//Importar Producto context
import { ProductoContext } from '../contexts/ProductContext'

const DetallesProducto = () => {
  //Obtener el id del producto desde la url
  const {id} = useParams();
  const {productos} = useContext(ProductoContext);
  const {addToCart} = useContext(CartContext);
  
  //Obtner solo un producto basado en el id
  const producto = productos.find ((item) => {
    return item.id === parseInt(id);
  });

  //Si el producto no es cargado
  if (!producto) {
    return ( 
    <section className='h-screen flex justify-center items-center'>
      Cargando...
      </section>
    );
  }

  //Destructuracion de producto
  const { title, price, description, image } = producto;
  return (
  <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      {/* imagen y texto */}
      <div className='flex flex-col lg:flex-row items-center'>
        {/* imagen */}
        <div className='flex flex-1 justify-center 
        items-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={ image } alt=''/>
        </div>
        {/* texto */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 
          max-w-[450px] mx-auto lg:mx-0'> 
          { title }
          </h1>
          <div className='text-xl text-[#3bd100] 
          font-medium mb-6'>
            $ { price }
          </div>
          <p className='mb-8'>{ description }</p>
          <button 
          onClick={() => addToCart(producto, producto.id)}
          className='bg-[#1E1F29] py-4 px-8 text-white'>
            Agregar al Carrito
          </button>
        </div>        
      </div>
    </div>
  </section>
  );
};

export default DetallesProducto;
