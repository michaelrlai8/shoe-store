import React, { useState } from 'react';

import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const ProductDetailsDropdowns = () => {
  const [showShippingPolicy, setShowShippingPolicy] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  return (
    <div className='mt-6 border-t border-gray-200 py-6'>
      <div
        onClick={() => setShowSizeGuide(!showSizeGuide)}
        className='flex justify-between hover:cursor-pointer'
      >
        <div className='text-xl'> Sizing Guide</div>
        <div className='flex items-center pr-2 text-2xl'>
          {showSizeGuide ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {showSizeGuide && (
        <div className='pt-6'>
          <div>
            1. Step on a piece of paper with your heel slightly touching a wall
            behind.
          </div>
          <div>
            2. Mark the end of your longest toe on the paper (you might need a
            friend to help you) and measure from the wall to the marking.
          </div>
          <div>
            3. Do the same for the other foot and compare measurements with our
            size chart to get the right size.
          </div>
        </div>
      )}

      <div className='mt-6 border-b border-t border-gray-200 py-6'>
        <div
          onClick={() => setShowShippingPolicy(!showShippingPolicy)}
          className='flex justify-between hover:cursor-pointer'
        >
          <div className='text-xl'> Shipping & Returns</div>
          <div className='flex items-center pr-2 text-2xl'>
            {showShippingPolicy ? <IoChevronUp /> : <IoChevronDown />}
          </div>
        </div>
        {showShippingPolicy && (
          <div className='pt-6'>
            Free standard shipping on orders $50+ and free 60-day returns
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsDropdowns;
