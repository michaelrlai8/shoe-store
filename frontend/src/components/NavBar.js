import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Transition } from '@headlessui/react';

import {
  IoBagCheckOutline,
  IoCloseOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiConverseShoe } from 'react-icons/gi';

const NavBar = ({ showNav, setShowNav }) => {
  const [showShipping, setShowShipping] = useState(true);

  const handleShowNav = () => {
    setShowNav(!showNav);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <div className='fixed top-0 z-10 w-full bg-white'>
      <div className='flex justify-between px-5 py-4 lg:px-24'>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2 text-xl font-extrabold'>
            <Link to='/' onClick={handleShowNav}>
              <GiConverseShoe className='text-2xl' />
            </Link>
            <Link to='/' onClick={handleShowNav}>
              shoestore
            </Link>
          </div>
          <ul className='mt-1 hidden items-center gap-6 text-sm lg:flex'>
            <NavLink to='/products'>MEN</NavLink>
            <NavLink to='/products'>WOMEN</NavLink>
            <NavLink to='/products'>KIDS</NavLink>
            <NavLink to='/products'>UNISEX</NavLink>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <button>
            <IoBagCheckOutline className='text-xl' />
          </button>
          <button>
            <IoPersonOutline className='text-xl' />
          </button>
          <button onClick={handleShowNav} className='lg:hidden'>
            <RxHamburgerMenu className='text-xl' />
          </button>
        </div>
      </div>

      <Transition
        show={showShipping}
        as='div'
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='absolute flex w-screen justify-center bg-red-500 text-white'
      >
        <div className='mr-auto'>
          <IoCloseOutline className='text-red-500' />
        </div>
        <div className=''>Now with free shipping on all orders!</div>
        <button onClick={() => setShowShipping(false)} className='ml-auto pr-1'>
          <IoCloseOutline className='text-white' />
        </button>
      </Transition>

      <Transition
        show={showNav}
        as='ul'
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='absolute flex h-screen w-full flex-col gap-8 bg-white p-32 text-center text-lg lg:hidden'
      >
        <NavLink to='/' onClick={handleShowNav}>
          MEN
        </NavLink>
        <NavLink to='/' onClick={handleShowNav}>
          WOMEN
        </NavLink>
        <NavLink to='/' onClick={handleShowNav}>
          KIDS
        </NavLink>
        <NavLink to='/' onClick={handleShowNav}>
          UNISEX
        </NavLink>
      </Transition>
    </div>
  );
};

export default NavBar;
