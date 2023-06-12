import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Transition } from '@headlessui/react';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='App relative flex h-screen flex-col'>
      <NavBar showNav={showNav} setShowNav={setShowNav} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
