import React from 'react';

const ProductDetailsSizes = ({ id, selectedSize, setSelectedSize, sizes }) => {
  return (
    <div className='mt-6'>
      <div>Sizes</div>
      <div className='mt-2 grid grid-cols-5 gap-2'>
        {sizes.map((size) => (
          <button
            onClick={() => setSelectedSize(size)}
            key={`${id} ${size}`}
            className={`border border-solid py-2 text-center hover:border-black ${
              selectedSize === size ? 'border-black' : 'border-gray-200'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSizes;
