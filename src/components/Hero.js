import React from 'react';
// importar imagenes
import CartImg from '../img/AddToCart.png';
//Importar Link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[800px] bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* texto */}
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center
        uppercase'>
          {/* pretitulo */}
          <div className='w-10 h-[2px] bg-[#3bd100] mr-3'></div>Camaleon Shop MX
        </div>
        {/* titulo */}
        <h1 className='text-[70px] leading-['>
        ESTILO y TECNOLOGÍA EN UN<br />
        <span className='font-semibold'>SOLO LUGAR</span>
        </h1>
        <Link to={'/'} className='uppercase self-start
        font-semibold border-b-2 border-primary'>
          Conoce Más
        </Link>
      </div>
      {/* imagen */}
      <div className='hidden lg:block'>
        <img src={CartImg} alt=''/>
      </div>
    </div>
  </section>);
};

export default Hero;
