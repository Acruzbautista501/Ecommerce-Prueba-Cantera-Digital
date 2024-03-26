import React, { useContext } from 'react';
//Importar Link
import { Link } from 'react-router-dom';
//Importar iconos
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
//Importar Cart Context
import {CartContext} from '../contexts/CartContext';

const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  //Desestructuración de articulo
  const { id, title, image, price, amount } = item;
  return (
  <div className='flex gap-x-4 py-2 lg:px-6 border-b
  border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* imagen */}
      <Link to={`/producto/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
      </Link>
      <div className='w-full flex flex-col'>
        {/* titulo e icono de eliminacion */}
        <div className='flex justify-between mb-2'>
           {/* titulo */}
          <Link to={`/producto/${id}`} 
          className='text-sm uppercase font-medium max-w-[240px] 
          text-primary hover:underline'>
            {title}
          </Link>
           {/* icono de eliminacion */}
           <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500' />
           </div>
        </div>
        <div className=' flex gap-x-2 h-[36px] text-sm'>
          {/* cantidad del articulo */}
          <div className='flex flex-1 max-w-[100px]
          items-center h-full border text-primary font-medium'>
            {/* icono de menos */}
            <div onClick={()=> decreaseAmount(id)} className='flex-1 h-full flex justify-center 
            items-center cursor-pointer'>
              <IoMdRemove />
            </div>
            {/* cantidad */}
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            {/* icono de mas */}
            <div onClick={()=> increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>
          {/* precio del articulo */}
          <div className='flex-1 flex items-center justify-around'>$ {price}</div>    
           {/* precio final */}
           {/*  */}
           <div className='flex-1 flex justify-end items-center text-primary font-medium'>
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>                     
        </div>
      </div> 
    </div>
  </div>
  );
};

export default CartItem;
