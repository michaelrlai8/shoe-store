import React, { useState, useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GiSettingsKnobs } from 'react-icons/gi';

import ProductsFiltersList from '../components/ProductsFiltersList';
import ProductsList from '../components/ProductsList';

const ProductsListing = ({ filters, setFilters }) => {
  const [arrangedProducts, setArrangedProducts] = useState();
  const [showFilters, setShowFilters] = useState(false);

  const GET_PRODUCTS = gql`
    query Products {
      products {
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
    if (data) {
      const shuffleArray = (array) => {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }

        return shuffledArray;
      };
      const shuffledArray = shuffleArray(data.products.data);

      setArrangedProducts(shuffledArray);
    }
  }, [data]);

  return (
    <div className='mt-[60px]'>
      <div className='flex h-10 items-center justify-between gap-2 px-6 lg:h-24 lg:px-12'>
        <div className='text-3xl'>Shoes</div>
        <button
          className='flex items-center gap-2'
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          Show Filters
          <GiSettingsKnobs className='text-xl' />
        </button>
      </div>

      <div className='relative lg:flex lg:px-12'>
        <ProductsFiltersList
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
        <ProductsList arrangedProducts={arrangedProducts} />
      </div>
    </div>
  );
};

export default ProductsListing;
