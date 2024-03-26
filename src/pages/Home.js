import React, {useContext} from 'react';
//Importar ProductoContext
import { ProductoContext } from '../contexts/ProductContext';
//Importar componentes
import Producto from '../components/Producto';
import Hero from '../components/Hero';

const Home = () => {
  //Obtner productos de ProductoContext
  const { productos } = useContext(ProductoContext);
  //Obtener solo las categorías men's & women's clothing
  const filtroPoductos = productos.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "electronics"
      );
  });
  return (
  <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm 
        mx-auto md:max-w-none md:mx-0'>
          {filtroPoductos.map((producto) => {
            return (
              <Producto producto={producto} key={producto.id} />
            );
          })}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;