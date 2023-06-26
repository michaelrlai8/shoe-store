import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import ProductsFiltersListCategories from './ProductsFiltersListCategories';

const ProductsFiltersList = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
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
        <div className='fixed left-0 top-0 z-10 h-full w-full justify-between bg-white px-6 py-4 lg:static lg:h-fit lg:min-w-[240px] lg:max-w-[240px] lg:px-0'>
          <div className='flex items-center justify-end'>
            <button
              onClick={() => {
                setShowFilters(false);
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
      )}
    </div>
  );
};

export default ProductsFiltersList;
