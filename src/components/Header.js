import React, { useContext, useEffect, useState } from 'react';
//Sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//Cart context
import { CartContext } from '../contexts/CartContext';
//Importar iconos 
import { BsCart3 } from "react-icons/bs";
//Importar Link
import { Link } from 'react-router-dom';


const Header = () => {
  //Estado del encabezado
  const [isActive, setIsActive] = useState(false); 
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext)
  //event listener
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
  <header className={`${isActive ? 'bg-[#505375] py-4 shadow-md' : 'bg-none py-6'} 
  fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      {/* Logo */}
      <Link to={'/'}>
        <div>
          <img className='w-[150px]' src='/logo.png' alt='' />
          </div>
      </Link>
      {/* carrito */}
      <div onClick={() => setIsOpen(!isOpen)} 
      className='cursor-pointer flex relative'>
        <BsCart3 className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -top-1
        text-[12px] w-[18px] h-[18px] text-white rounded-full
        flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
  </header>
  );
};

export default Header;
