import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import ProductsListing from './pages/ProductsListing';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
    price: [],
  });

  const clearFilters = () => {
    setFilters({
      category: [],
      color: [],
      size: [],
      price: [],
    });
  };

  return (
    <div className='App relative flex h-full flex-col'>
      <NavBar
        showNav={showNav}
        setShowNav={setShowNav}
        setFilters={setFilters}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/products'
          element={
            <ProductsListing
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
            />
          }
        />
        <Route path={`/products/:id`} element={<ProductDetails />} />
        <Route path={`/products/:name/:id`} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
