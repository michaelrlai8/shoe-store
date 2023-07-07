import React, { useEffect } from 'react';

const CheckoutSuccess = ({ setCart }) => {
  useEffect(() => {
    let tempCart = [];
    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  }, [setCart]);

  return (
    <div className='mt-40'>
      <div className='text-center text-3xl font-bold'>Thank you!</div>
      <div className='mt-6 text-center'>
        You have successfully made an order.
      </div>
    </div>
  );
};

export default CheckoutSuccess;
