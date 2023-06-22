import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

//import { useQuery, gql } from '@apollo/client';

function App() {
  const [showNav, setShowNav] = useState(false);

  /*
  const GET_PRODUCTS = gql`
    query GetProducts {
      products {
        data {
          id
          attributes {
            name
            description
            price
            color
            sizes
            slug
            colorway
            variants {
              data {
                id
                attributes {
                  name
                  images {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  colorway
                }
              }
            }
            images {
              data {
                id
                attributes {
                  url
                  width
                  height
                  hash
                }
              }
            }
          }
        }
      }
    }
  `;

   const { loading, error, data } = useQuery(GET_PRODUCTS);
*/

  return (
    <div className='App relative flex h-full flex-col'>
      <NavBar showNav={showNav} setShowNav={setShowNav} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path={`/products/:id`} element={<ProductDetails />} />
        <Route path={`/products/:id/:name`} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
