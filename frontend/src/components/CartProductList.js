import React from 'react';

import { Link } from 'react-router-dom';

const CartProductList = ({ cart, setCart }) => {
  const quantities = [1];

  return (
    <div className='flex flex-col'>
      {cart.map((product, index) => (
        <div
          key={`cart ${product.id}`}
          className={`flex gap-6 py-4 ${
            index === 0 ? '' : 'border-t border-gray-200'
          }`}
        >
          <div className='h-40 w-40'>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt='' />
            </Link>
          </div>
          <div className='flex flex-col gap-1'>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <div className='text-gray-500'>
              {product.category === 'kids'
                ? `${
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)
                  }' Shoes`
                : `${
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)
                  }'s Shoes`}
            </div>
            <div className='hidden text-gray-500 lg:block'>
              {product.colorway}
            </div>
            <div className='flex gap-2 text-gray-500'>
              <div>
                Size
                <select className='border-none py-0 focus:ring-0'>
                  {product.sizes.map((size) =>
                    size === product.selectedSize ? (
                      <option selected>{size}</option>
                    ) : (
                      <option>{size}</option>
                    )
                  )}
                </select>
              </div>
              <div>Quantity</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProductList;
