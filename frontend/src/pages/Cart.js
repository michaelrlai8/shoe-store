import React from 'react';

import { Link } from 'react-router-dom';

import CartProductList from '../components/CartProductList';

const Cart = ({ cart, setCart }) => {
  return (
    <div className='mt-[60px]'>
      <div className='flex flex-col justify-between lg:px-12'>
        <div className='flex flex-col px-6 lg:flex-row'>
          <div className='w-full'>
            <div className='flex h-10 items-center text-2xl lg:h-24'>Bag</div>
            <CartProductList cart={cart} />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='px-0 lg:px-12'>
              <div className='flex h-10 items-center text-2xl lg:h-24'>
                Summary
              </div>
            </div>
          </div>
        </div>

        <div className='fixed bottom-4 w-full lg:hidden'>
          <Link to='/checkout'>
            <div className='mx-6 bg-black py-4 text-center text-white'>
              Checkout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
