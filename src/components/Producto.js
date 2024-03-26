import React, {useContext} from 'react';
//Importar link
import { Link } from 'react-router-dom';
//Importar iconos
import { BsPlus, BsEyeFill } from "react-icons/bs";
//Importar Cart Context
import { CartContext } from '../contexts/CartContext';

const Producto = ({producto}) => {
  const {addToCart} = useContext(CartContext);
  //Desestructuración de producto
  const {id, image, category, title, price} = producto;

  return (
    <div>
      <div className='border border-[#3bd100] h-[350px]
      mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
           {/* imagen */}
          <div className='w-[250px] mx-auto flex justify-center items-center'>
            <img className='max-h-[210px] group-hover:scale-110
            transition duration-300' src={image} alt='' />
          </div>
        </div>
        {/* botones */}
        <div className='absolute top-6 -right-11 group-hover:right-5 
        p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 
        group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(producto,id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-[#3bd100]'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/producto/${id}`} className='w-12 h-12 bg-white flex justify-center items-center
          text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
       {/* categoria, titulo y precio */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/producto/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Producto;
