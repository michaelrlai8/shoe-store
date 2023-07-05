import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import ProductsFiltersListGroup from './ProductsFiltersListGroup';

const ProductsFiltersList = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  handleShowFilterList,
}) => {
  const handleCategoryFilters = (category) => {
    if (!filters.category.includes(category)) {
      setFilters({
        ...filters,
        category: [...filters.category, category],
      });
    } else {
      const removedFilter = filters.category.filter((n) => n !== category);
      setFilters({ ...filters, category: removedFilter });
    }
  };

  const handlePriceFilters = (price) => {
    if (!filters.price.includes(price)) {
      setFilters({
        ...filters,
        price: [...filters.price, price],
      });
    } else {
      const removedFilter = filters.price.filter((n) => n !== price);
      setFilters({ ...filters, price: removedFilter });
    }
  };

  const groupFilters = [
    {
      group: 'Categories',
      names: ['men', 'women', 'kids'],
      handler: handleCategoryFilters,
    },
    {
      group: 'Price',
      names: ['$0 - $49', '$50 - $99', '$100 - $149', '$150+'],
      handler: handlePriceFilters,
    },
  ];

  return (
    <div>
      {showFilters && (
        <div className='fixed left-0 top-0 z-10 flex h-full w-full flex-col justify-between bg-white px-6 py-4 pl-6 lg:static lg:h-fit lg:min-w-[240px] lg:max-w-[240px] lg:px-0'>
          <div>
            <div className='flex items-center justify-end'>
              <button
                onClick={() => {
                  setShowFilters(!showFilters);
                  document.body.classList.toggle('overflow-hidden');
                }}
                className='lg:hidden'
              >
                <IoCloseOutline className='text-2xl' />
              </button>
            </div>

            {groupFilters.map((groupFilter, index) => (
              <ProductsFiltersListGroup
                key={`groupFilter ${index}`}
                filters={filters}
                groupFilter={groupFilter}
                handler={groupFilter.handler}
              />
            ))}
          </div>
          <div className=''>
            <div className='grid grid-cols-2 gap-2 pt-6 lg:hidden'>
              <button
                onClick={() => {
                  setFilters({
                    category: [],
                    color: [],
                    size: [],
                    price: [],
                  });
                }}
                className='border border-gray-200 py-2'
              >
                CLEAR
              </button>
              <button
                onClick={() => {
                  setShowFilters(!showFilters);
                  document.body.classList.toggle('overflow-hidden');
                }}
                className='bg-black py-2 text-white'
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsFiltersList;
