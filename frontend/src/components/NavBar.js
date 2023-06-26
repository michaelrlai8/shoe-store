import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Transition } from '@headlessui/react';

import { IoBagCheckOutline, IoPersonOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiConverseShoe } from 'react-icons/gi';

const NavBar = ({ showNav, setShowNav, setFilters }) => {
  const handleShowNav = () => {
    setShowNav(!showNav);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <div className='fixed top-0 z-10 w-full bg-white'>
      <div className='flex justify-between px-6 py-4 lg:px-12'>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2 text-xl font-extrabold'>
            <Link to='/' onClick={showNav ? handleShowNav : null}>
              <GiConverseShoe className='text-2xl' />
            </Link>
            <Link
              to='/'
              onClick={
                showNav
                  ? () => {
                      handleShowNav();
                      setFilters({
                        category: [],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
                  : () => {
                      setFilters({
                        category: [],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
              }
            >
              shoestore
            </Link>
          </div>

          <ul className='mt-1 hidden items-center gap-6 text-sm lg:flex'>
            <NavLink
              to='/products'
              onClick={
                showNav
                  ? () => {
                      handleShowNav();
                      setFilters({
                        category: ['men'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
                  : () => {
                      setFilters({
                        category: ['men'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
              }
            >
              MEN
            </NavLink>
            <NavLink
              to='/products'
              onClick={
                showNav
                  ? () => {
                      handleShowNav();
                      setFilters({
                        category: ['women'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
                  : () => {
                      setFilters({
                        category: ['women'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
              }
            >
              WOMEN
            </NavLink>
            <NavLink
              to='/products'
              onClick={
                showNav
                  ? () => {
                      handleShowNav();
                      setFilters({
                        category: ['kids'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
                  : () => {
                      setFilters({
                        category: ['kids'],
                        color: [],
                        size: [],
                        price: [],
                      });
                    }
              }
            >
              KIDS
            </NavLink>
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <button onClick={showNav ? handleShowNav : null}>
            <IoBagCheckOutline className='text-xl' />
          </button>
          <button onClick={showNav ? handleShowNav : null}>
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
        enter='transition-all duration-200 transform ease-out'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition-all duration-200 transform ease-in'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
        className='absolute flex h-screen w-full flex-col gap-8 bg-white p-32 text-center text-lg lg:hidden'
      >
        <NavLink
          to='/products'
          onClick={() => {
            handleShowNav();
            setFilters({
              category: ['men'],
              color: [],
              size: [],
              price: [],
            });
          }}
        >
          MEN
        </NavLink>
        <NavLink
          to='/products'
          onClick={() => {
            handleShowNav();
            setFilters({
              category: ['women'],
              color: [],
              size: [],
              price: [],
            });
          }}
        >
          WOMEN
        </NavLink>
        <NavLink
          to='/products'
          onClick={() => {
            handleShowNav();
            setFilters({
              category: ['kids'],
              color: [],
              size: [],
              price: [],
            });
          }}
        >
          KIDS
        </NavLink>
      </Transition>
    </div>
  );
};

export default NavBar;
