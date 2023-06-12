import React from 'react';
import { Transition } from '@headlessui/react';

import { Link, NavLink } from 'react-router-dom';

import { IoBagCheckOutline, IoPersonOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiConverseShoe } from 'react-icons/gi';

const NavBar = ({ showNav, setShowNav }) => {
  const handleShowNav = () => {
    setShowNav(!showNav);
    document.documentElement.classList.toggle('overflow-hidden');
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <div className='sticky top-0 z-10 bg-white'>
      <div className='flex justify-between px-5 py-4 lg:px-24'>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2 text-xl font-extrabold'>
            <Link to='/'>
              <GiConverseShoe className='text-2xl' />
            </Link>
            <Link to='/'>shoestore</Link>
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
        show={showNav}
        as='ul'
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='absolute flex h-screen w-full flex-col gap-8 bg-white p-32 text-center text-lg lg:hidden'
      >
        <NavLink to='/products'>MEN</NavLink>
        <NavLink to='/products'>WOMEN</NavLink>
        <NavLink to='/products'>KIDS</NavLink>
        <NavLink to='/products'>UNISEX</NavLink>
      </Transition>
    </div>
  );
};

export default NavBar;
