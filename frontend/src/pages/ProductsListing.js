import React, { useState, useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

import { GiSettingsKnobs } from 'react-icons/gi';

import ProductsFiltersList from '../components/ProductsFiltersList';
import ProductsList from '../components/ProductsList';

const ProductsListing = ({ filters, setFilters, clearFilters }) => {
  const [allProducts, setAllProducts] = useState();
  const [displayedProducts, setDisplayedProducts] = useState();
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

      setAllProducts(shuffledArray);
    }
  }, [data]);

  useEffect(() => {
    if (filters.category.length > 0 && allProducts) {
      const result = allProducts.filter((product) => {
        if (
          filters.category.indexOf(
            product.attributes.category.data.attributes.name
          ) >= 0
        ) {
          return true;
        }
      });

      setDisplayedProducts(result);
    } else {
      setDisplayedProducts(allProducts);
    }
  }, [allProducts, filters]);

  return (
    <div className='mt-[60px]'>
      <div className='flex h-10 items-center justify-between gap-2 px-6 lg:h-24 lg:px-12'>
        <div className='text-3xl'>
          {filters.category[0] === 'kids'
            ? `${
                filters.category[0].charAt(0).toUpperCase() +
                filters.category[0].slice(1)
              }' Shoes`
            : filters.category.length === 1
            ? `${
                filters.category[0].charAt(0).toUpperCase() +
                filters.category[0].slice(1)
              }'s Shoes`
            : 'Shoes'}
        </div>
        <button
          className='flex items-center gap-2 lg:hidden'
          onClick={() => {
            setShowFilters(!showFilters);
            document.body.classList.toggle('overflow-hidden');
          }}
        >
          Show Filters
          <GiSettingsKnobs className='text-xl' />
        </button>
        <button
          className='hidden items-center gap-2 lg:flex'
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
          filters={filters}
          setFilters={setFilters}
        />
        <ProductsList
          displayedProducts={displayedProducts}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
};

export default ProductsListing;
