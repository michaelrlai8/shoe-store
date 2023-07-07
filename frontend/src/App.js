import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import ProductsListing from './pages/ProductsListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

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

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCartQuantity(
        JSON.parse(localCart).reduce((a, b) => {
          return a + b.quantity;
        }, 0)
      );
    }
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  return (
    <div className='App relative flex h-full flex-col'>
      <NavBar
        showNav={showNav}
        setShowNav={setShowNav}
        setFilters={setFilters}
        cartQuantity={cartQuantity}
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

        <Route
          path={`/products/:id`}
          element={
            <ProductDetails
              setCart={setCart}
              cart={cart}
              setCartQuantity={setCartQuantity}
            />
          }
        />
        <Route
          path={`/products/:name/:id`}
          element={
            <ProductDetails
              setCart={setCart}
              cart={cart}
              setCartQuantity={setCartQuantity}
            />
          }
        />

        <Route
          path={`/cart`}
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path={`/checkout`}
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        <Route
          path={`/checkout/success`}
          element={<CheckoutSuccess setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
