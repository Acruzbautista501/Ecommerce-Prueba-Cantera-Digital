import React from 'react';
//Importar react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Importar las páginas
import Home from './pages/Home';
import DetallesProducto from './pages/DetallesProducto';
//Importar los componentes
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producto/:id' element={<DetallesProducto />}/>
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;