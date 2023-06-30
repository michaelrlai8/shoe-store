import React from 'react';

import { Link } from 'react-router-dom';

import { IoCloseOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';

const ProductAddedPopup = ({
  data,
  selectedSize,
  setShowProductAddedPopup,
}) => {
  return (
    <div className='fixed top-0 z-10 h-screen w-screen bg-black/70'>
      <div className='w-full bg-white p-6 lg:m-auto lg:mt-20 lg:w-1/2'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='flex items-center text-lg text-green-700'>
              <FaCheckCircle />
            </div>
            <div className='pl-6 text-lg'>Added to Bag</div>
          </div>
          <button>
            <IoCloseOutline
              onClick={() => {
                setShowProductAddedPopup(false);
              }}
              className='text-2xl'
            />
          </button>
        </div>
        <div className='flex gap-6 pt-6'>
          <div className='h-40 w-40'>
            <img
              src={data.product.data.attributes.images.data[0].attributes.url}
              alt=''
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div>
              {data.product.data.attributes.parent_product.data.attributes.name}
            </div>
            <div className='text-gray-500'>
              {`${
                data.product.data.attributes.category.data.attributes.name
                  .charAt(0)
                  .toUpperCase() +
                data.product.data.attributes.category.data.attributes.name.slice(
                  1
                )
              }'s Shoes`}
            </div>
            <div className='text-gray-500'>{`Size ${selectedSize}`}</div>
            <div>{`$${data.product.data.attributes.price}`}</div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 pt-6'>
          <Link
            to='/cart'
            onClick={() => setShowProductAddedPopup(false)}
            className='border border-gray-200 py-2 text-center'
          >
            View Bag
          </Link>

          <button
            onClick={() => setShowProductAddedPopup(false)}
            className='bg-black py-2 text-white'
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddedPopup;
