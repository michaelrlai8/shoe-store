import React from 'react';

const ProductsFilters = ({ showFilters }) => {
  return (
    <div
      className={`lg:min-w-[240px] lg:max-w-[240px] ${
        !showFilters ? 'hidden' : ''
      }`}
    >
      filter
    </div>
  );
};

export default ProductsFilters;
