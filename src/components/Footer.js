import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <footer className='bg-[#1E1F29] py-12'>
    <div className='container mx-auto'>
      <p className='text-white text-center'>
      Derechos de Autor &copy; {currentYear} <a className='hover:text-[#3bd100]' href="https://aldair-cruz-bautista.netlify.app">
        Aldair Cruz Bautista</a> | Todos los derechos reservados
      </p>
    </div>
  </footer>
    );
};

export default Footer;

