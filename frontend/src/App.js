import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='App relative flex h-full flex-col'>
      <NavBar showNav={showNav} setShowNav={setShowNav} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path={`/products/:id`} element={<ProductDetails />} />
        <Route path={`/products/:name/:id`} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
