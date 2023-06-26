import React from 'react';

const ProductsFiltersListCategories = ({
  filters,
  categoryNames,
  handleCategoryFilter,
}) => {
  return (
    <div className='flex flex-col gap-4 lg:gap-1.5'>
      <div className='pb-2 text-lg'>Category</div>
      {categoryNames.map((category) => (
        <label
          key={category}
          className='flex items-center gap-1.5 hover:cursor-pointer hover:text-gray-500'
        >
          <input
            type='checkbox'
            className='h-[18px] w-[18px]  text-black focus:ring-0'
            checked={filters.category.includes(category)}
            onChange={() => handleCategoryFilter(category)}
          />
          <div>{category.charAt(0).toUpperCase() + category.slice(1)}</div>
        </label>
      ))}
    </div>
  );
};

export default ProductsFiltersListCategories;
