import React from 'react';

const ProductsFiltersListGroup = ({ filters, groupFilter, handler }) => {
  return (
    <div className='flex flex-col gap-4 pb-6 lg:mr-12 lg:gap-1.5'>
      <div>
        <div className='pb-2 text-lg'>{groupFilter.group}</div>
        {groupFilter.names.map((name) => (
          <label
            key={name}
            className='flex items-center gap-1.5 hover:cursor-pointer hover:text-gray-500'
          >
            <input
              type='checkbox'
              className='h-[18px] w-[18px]  text-black focus:ring-0'
              checked={
                filters.category.includes(name) ||
                filters.color.includes(name) ||
                filters.size.includes(name) ||
                filters.price.includes(name)
              }
              onChange={() => handler(name)}
            />
            <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductsFiltersListGroup;
