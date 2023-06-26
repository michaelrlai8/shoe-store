import React from 'react';

import hero from '../assets/hero.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import kids from '../assets/kids.jpg';
import unisex from '../assets/unisex.jpg';
import mid from '../assets/mid.jpg';

import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = ({ setFilters }) => {
  return (
    <div className='absolute top-0  h-screen w-screen'>
      <img
        src={hero}
        alt='grey pair of shoes'
        className='h-screen w-screen object-cover brightness-75'
      />
      <div className='absolute bottom-0 flex w-full flex-col gap-4 px-6 py-36 text-white lg:items-end lg:px-20'>
        <div className='text-4xl font-semibold'>This is a shoe store</div>
        <div>You can find shoes for every activity here</div>
        <Link
          to='/products'
          className='w-fit bg-white px-10 py-3 font-semibold text-black'
        >
          SHOP NOW
        </Link>
      </div>

      <div className='mt-12 flex h-screen flex-col'>
        <div className='px-6 lg:flex lg:gap-8 lg:px-24'>
          <div className='w-full flex-grow'>
            <img src={men} alt='' className='aspect-square object-cover' />
            <div>
              <div className='text-2xl font-bold'>Men</div>
              <div className='mb-2'>See our mens collection</div>
              <Link to='/products'>
                <button
                  onClick={() => {
                    setFilters({
                      category: ['men'],
                      color: [],
                      size: [],
                      price: [],
                    });
                  }}
                  className='mb-12 w-48 bg-black py-3 font-semibold text-white'
                >
                  SHOP MEN
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full flex-grow'>
            <img src={women} alt='' className='aspect-square object-cover' />
            <div>
              <div className='text-2xl font-bold'>Women</div>
              <div className='mb-2'>See our womens collection</div>
              <Link to='/products'>
                <button
                  onClick={() => {
                    setFilters({
                      category: ['women'],
                      color: [],
                      size: [],
                      price: [],
                    });
                  }}
                  className='mb-12 w-48 bg-black py-3 font-semibold text-white'
                >
                  SHOP WOMEN
                </button>
              </Link>
            </div>
          </div>
        </div>

        <img src={mid} alt='' className='mb-12 h-2/3 object-cover' />

        <div className='mb-12 px-6 lg:flex lg:gap-8 lg:px-24'>
          <div className='w-full flex-grow'>
            <img src={kids} alt='' className='aspect-square object-cover ' />
            <div>
              <div className='text-2xl font-bold'>Kids</div>
              <div className='mb-2'>See our kids collection</div>
              <Link to='/products'>
                <button
                  className='mb-12 w-48 bg-black py-3 font-semibold text-white'
                  onClick={() => {
                    setFilters({
                      category: ['kids'],
                      color: [],
                      size: [],
                      price: [],
                    });
                  }}
                >
                  SHOP KIDS
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full flex-grow'>
            <img src={unisex} alt='' className='aspect-square object-cover' />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
