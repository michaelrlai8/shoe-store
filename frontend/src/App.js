import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import ProductsListing from './pages/ProductsListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

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

  const GET_PRODUCTS = gql`
    query Products {
      products(pagination: { limit: 100 }) {
        data {
          id
          attributes {
            parent_product {
              data {
                id
                attributes {
                  name
                }
              }
            }
            price
            category {
              data {
                attributes {
                  name
                }
              }
            }
            images {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(GET_PRODUCTS);

  let localCart = localStorage.getItem('cart');

  const addItem = (item) => {};
  const updateItem = (itemID, amount) => {};
  const removeItem = (itemID) => {};

  useEffect(() => {
    localCart = JSON.parse(localCart);

    if (localCart) setCart(localCart);
  }, []);

  return (
    <div className='App relative flex h-full flex-col'>
      <NavBar
        showNav={showNav}
        setShowNav={setShowNav}
        setFilters={setFilters}
      />

      <Routes>
        <Route path='/' element={<Home setFilters={setFilters} />} />

        <Route
          path='/products'
          element={
            <ProductsListing
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
              data={data}
              GET_PRODUCTS={GET_PRODUCTS}
            />
          }
        />

        <Route path={`/products/:id`} element={<ProductDetails />} />
        <Route path={`/products/:name/:id`} element={<ProductDetails />} />

        <Route path={`/cart`} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
