import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import ProductsFiltersListCategories from './ProductsFiltersListCategories';

const ProductsFiltersList = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  handleShowFilterList,
}) => {
  const handleCategoryFilter = (category) => {
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

  const categoryNames = ['men', 'women', 'kids'];

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

            <ProductsFiltersListCategories
              filters={filters}
              categoryNames={categoryNames}
              handleCategoryFilter={handleCategoryFilter}
            />
          </div>
          <div className=''>
            <div className='grid grid-cols-2 gap-2 border-t border-gray-200 pt-6 lg:hidden'>
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
                className='bg-black text-white'
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
