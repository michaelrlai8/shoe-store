import React, { useState } from 'react';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const ProductDetailsCarousel = ({ data }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div className='relative w-full lg:ml-12'>
      <img
        src={`${process.env.REACT_APP_API_URL}${data.product.data.attributes.images.data[currentPhotoIndex].attributes.url}`}
        alt=''
        className='w-full'
      />
      <div className='absolute right-6 top-6 flex gap-3 text-2xl'>
        <button
          onClick={() => {
            if (currentPhotoIndex > 0) {
              setCurrentPhotoIndex(currentPhotoIndex - 1);
            }
          }}
        >
          <IoChevronBack />
        </button>
        <button
          onClick={() => {
            if (
              currentPhotoIndex <
              data.product.data.attributes.images.data.length - 1
            ) {
              setCurrentPhotoIndex(currentPhotoIndex + 1);
            }
          }}
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
