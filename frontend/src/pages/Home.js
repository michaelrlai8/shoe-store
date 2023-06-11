import React from 'react';
import Main from '../assets/main.jpg';

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='relative h-full w-full'>
        <img
          src={Main}
          alt='shoes on a branch'
          className='absolute left-[20%] h-2/3 w-full scale-150 object-cover'
        />
        <div className='absolute left-[10%] top-48 flex w-[40%] flex-col'>
          <div className='text-center text-5xl font-extrabold'>
            Shoes for every challenge
          </div>
          <button className='mx-auto mt-6 bg-black px-8 py-4 text-white'>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
