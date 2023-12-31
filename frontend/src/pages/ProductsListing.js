import React, { useState, useEffect } from 'react';

import { GiSettingsKnobs } from 'react-icons/gi';

import ProductsFiltersList from '../components/ProductsFiltersList';
import ProductsList from '../components/ProductsList';

const ProductsListing = ({
  data,
  GET_PRODUCTS,
  filters,
  setFilters,
  clearFilters,
}) => {
  const [allProducts, setAllProducts] = useState();
  const [displayedProducts, setDisplayedProducts] = useState();
  const [showFilters, setShowFilters] = useState(false);

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
    let result;
    if (filters.category.length > 0 && allProducts) {
      result = allProducts.filter((product) => {
        if (
          filters.category.indexOf(
            product.attributes.category.data.attributes.name
          ) >= 0
        ) {
          return true;
        }
        return false;
      });
    } else {
      result = allProducts;
    }

    if (filters.price.length > 0 && allProducts) {
      let newResult = result;
      result = newResult.filter((product) => {
        if (
          filters.price.indexOf('$0 - $49') >= 0 &&
          product.attributes.price < 50
        ) {
          return true;
        } else if (
          filters.price.indexOf('$50 - $99') >= 0 &&
          product.attributes.price >= 50 &&
          product.attributes.price < 100
        ) {
          return true;
        } else if (
          filters.price.indexOf('$100 - $149') >= 0 &&
          product.attributes.price >= 100 &&
          product.attributes.price < 150
        ) {
          return true;
        } else if (
          filters.price.indexOf('$150+') >= 0 &&
          product.attributes.price >= 150
        ) {
          return true;
        }
        return false;
      });
    }

    setDisplayedProducts(result);
  }, [allProducts, filters]);

  return (
    <div className='mt-[60px]'>
      <div className='flex h-10 items-center justify-between gap-2 px-6 lg:h-24 lg:px-12'>
        <div className='text-2xl'>
          {filters.category[0] === 'kids' && filters.category.length === 1
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
          {` (${displayedProducts?.length})`}
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
