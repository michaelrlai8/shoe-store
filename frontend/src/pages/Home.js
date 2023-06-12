import React from 'react';

import main from '../assets/main.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import kids from '../assets/kids.jpg';
import unisex from '../assets/unisex.jpg';
import mid from '../assets/mid.jpg';

const Home = () => {
  return (
    <div className='absolute top-0  h-screen w-screen'>
      <img
        src={main}
        alt='grey pair of shoes'
        className='h-screen w-screen object-cover brightness-75'
      />
      <div className='right- absolute bottom-0 flex w-full flex-col gap-4 px-6 py-20 text-white lg:items-end lg:px-20 lg:py-48'>
        <div className='text-4xl font-semibold'>This is a shoe store</div>
        <div>You can find shoes for every activity here</div>
        <div>
          <button className='bg-white px-10 py-3 font-semibold text-black'>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 w-screen bg-orange-600 py-1 text-center text-lg text-white'>
        Now with free shipping on all orders!
      </div>

      <div className='mt-12 flex flex-col px-6 lg:gap-12 lg:px-24'>
        <div className='text-3xl font-bold'>Collections</div>

        <div className='lg:flex lg:gap-8'>
          <div className='w-full flex-grow'>
            <img src={men} alt='' className='aspect-square object-cover' />
            <div>
              <div className='text-2xl font-bold'>Men</div>
              <div className='mb-2'>See our mens collection</div>
              <button className='mb-12 bg-black px-8 py-2 font-semibold text-white lg:mb-0'>
                SHOP MEN
              </button>
            </div>
          </div>
          <div className='w-full flex-grow'>
            <img src={women} alt='' className='aspect-square object-cover' />
            <div>
              <div className='text-2xl font-bold'>Women</div>
              <div className='mb-2'>See our womens collection</div>
              <button className='mb-12 bg-black px-8 py-2 font-semibold text-white lg:mb-0'>
                SHOP WOMEN
              </button>
            </div>
          </div>
        </div>

        <img src={mid} alt='' className='aspect-square object-cover' />

        <div className='lg:flex lg:gap-8'>
          <div className='w-full flex-grow'>
            <img src={kids} alt='' className='aspect-square object-cover ' />
            <div>
              <div className='text-2xl font-bold'>Kids</div>
              <div className='mb-2'>See our kids collection</div>
              <button className='mb-12 bg-black px-8 py-2 font-semibold text-white lg:mb-0'>
                SHOP KIDS
              </button>
            </div>
          </div>
          <div className='w-full flex-grow'>
            <img src={unisex} alt='' className='aspect-square object-cover' />
            <div>
              <div className='text-2xl font-bold'>Unisex</div>
              <div className='mb-2'>See our unisex collection</div>
              <button className='mb-12 bg-black px-8 py-2 font-semibold text-white lg:mb-0'>
                SHOP UNISEX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
