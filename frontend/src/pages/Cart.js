import React from 'react';

import { Link } from 'react-router-dom';

import CartProduct from '../components/CartProduct';

const Cart = ({ cart, setCart }) => {
  const subtotal = cart.reduce(
    (accumulator, obj) => accumulator + obj.price * obj.quantity,
    0
  );

  return (
    <div className='mb-32 mt-[60px]'>
      <div className='mx-auto flex flex-col justify-between lg:max-w-6xl lg:px-6'>
        <div className='slg:mb-0 flex flex-col px-6 lg:flex-row lg:px-0'>
          <div className='w-full'>
            <div className='flex h-12 items-center text-2xl font-medium lg:h-24'>
              Bag
            </div>
            <div className='flex flex-col'>
              {cart.map((product, index) => (
                <CartProduct
                  cart={cart}
                  setCart={setCart}
                  product={product}
                  index={index}
                  key={`cartProduct ${product.id} ${index}`}
                />
              ))}
            </div>
          </div>
          <div className='w-full  px-0 lg:w-1/2 lg:pl-12'>
            <div className='flex h-12 items-center text-2xl font-medium lg:h-24'>
              Summary
            </div>
            <div className='flex flex-col pb-4 lg:gap-3'>
              <div className='flex justify-between'>
                <div>Subtotal</div>
                <div>{`$${subtotal.toLocaleString('en-US')}.00`}</div>
              </div>
              <div className='flex justify-between'>
                <div>Estimated Shipping & Handling</div>
                <div>$7.00</div>
              </div>
              <div className='flex justify-between'>
                <div>Estimated Tax</div>
                <div>-</div>
              </div>
            </div>
            <div
              className={`flex justify-between border-gray-200 py-0 lg:border-b lg:border-t lg:py-4`}
            >
              <div>Total</div>
              <div className='font-medium'>{`$${(subtotal + 7).toLocaleString(
                'en-US'
              )}.00`}</div>
            </div>
            <div className='hidden lg:block'>
              <Link to='/checkout'>
                <div className='my-6 bg-black py-4 text-center text-white'>
                  Checkout
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='fixed bottom-0 w-full bg-white py-4 lg:hidden'>
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
