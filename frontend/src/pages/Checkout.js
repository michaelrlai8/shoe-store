import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const subtotal = cart.reduce(
    (accumulator, obj) => accumulator + obj.price * obj.quantity,
    0
  );

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [formData.firstName, formData.lastName].join(' '),
      email: formData.email,
      products: cart.map(({ id, quantity }) => ({
        id,
        quantity,
      })),
    };

    console.log(requestBody);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/orders`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      }
    );

    const session = await response.json();

    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className='mb-32 mt-[60px]'>
      <div className='mx-auto flex flex-col justify-between lg:max-w-6xl lg:px-6'>
        <div className='slg:mb-0 flex flex-col px-6 lg:flex-row lg:px-0'>
          <div className='w-full border-b border-solid border-gray-200 pb-4 lg:border-none'>
            <div className='flex h-12 items-center text-2xl font-medium lg:h-24'>
              Checkout
            </div>
            <form action='' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6 lg:flex-row lg:gap-2'>
                  <Input
                    type='text'
                    placeholder='First Name*'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    type='text'
                    placeholder='Last Name*'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    type='text'
                    placeholder='Address*'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col gap-6 lg:flex-row lg:gap-2'>
                  <Input
                    type='text'
                    placeholder='Email*'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type='text'
                    placeholder='Phone Number*'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='w-full  px-0 lg:w-1/2 lg:pl-12'>
            <div className='flex h-12 items-center text-2xl font-medium lg:h-24'>
              In Your Bag
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
                <Button onClick={handlePayment} className='my-6 w-full py-4 '>
                  Pay
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='fixed bottom-0 w-full bg-white py-4 lg:hidden'>
          <Link to='/checkout'>
            <div className='mx-6'>
              <Button onClick={handlePayment} className='w-full bg-black py-4'>
                Pay
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
