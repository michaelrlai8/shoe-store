import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

const ProductsFiltersList = ({ showFilters, setShowFilters }) => {
  return (
    <div>
      {showFilters && (
        <div className='fixed left-0 top-0 z-10 h-full w-full justify-between bg-white px-6 py-4 lg:static lg:h-fit lg:min-w-[240px] lg:max-w-[240px]'>
          <div className='flex items-center justify-between'>
            <div>ProductsFiltersList</div>
            <button
              onClick={() => {
                setShowFilters(false);
              }}
              className='lg:hidden'
            >
              <IoCloseOutline className='text-2xl' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsFiltersList;
