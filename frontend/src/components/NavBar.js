import React from 'react';

import { IoBagCheckOutline, IoPersonOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiConverseShoe } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div className='h-screen md:h-fit'>
      <div className='flex justify-between px-10 md:px-24 py-4'>
        <div className='flex gap-16'>
          <div className='text-3xl font-extrabold flex items-center gap-2'>
            <GiConverseShoe className='text-5xl' />
            shoestore
          </div>
          <ul className='hidden md:flex items-center gap-8 mt-1'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Unisex</li>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <button>
            <IoBagCheckOutline className='text-xl' />
          </button>
          <button>
            <IoPersonOutline className='text-xl' />
          </button>
          <button className='md:hidden'>
            <RxHamburgerMenu className='text-xl' />
          </button>
        </div>
      </div>

      <ul className='md:hidden text-center'>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Unisex</li>
      </ul>
    </div>
  );
};

export default NavBar;
