import React from 'react';

import { Link } from 'react-router-dom';

import { IoTrashOutline } from 'react-icons/io5';

const CartProduct = ({ product, index, cart, setCart }) => {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSizeChange = (e) => {
    const dropdownSize = Number(e.target.value);

    const duplicateIndex = cart.findIndex((cartProduct) => {
      if (
        cartProduct.id === product.id &&
        cartProduct.selectedSize === dropdownSize
      ) {
        return true;
      }
    });

    let tempCart = [...cart];
    let tempTempCart = [...cart];

    if (duplicateIndex > -1) {
      tempTempCart[duplicateIndex].quantity += product.quantity;

      tempCart = tempTempCart.filter((tempProduct, tempIndex) => {
        if (tempIndex === index) {
          return false;
        } else {
          return true;
        }
      });

      console.log(tempCart);

      //  tempCart[duplicateIndex].quantity = dropdownSize;

      // setCart(tempCart);
      // localStorage.setItem('cart', JSON.stringify(tempCart));
    } else {
      let tempCart = [...cart];

      tempCart[index].selectedSize = dropdownSize; // If changing size via dropdown to a size of same shoe that is not already in cart
    }

    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  const handleQuantityChange = (e) => {
    const dropdownQuantity = Number(e.target.value);

    let tempCart = [...cart];

    tempCart[index].quantity = dropdownQuantity;

    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  const handleDelete = () => {
    const tempCart = cart.filter((cartProduct, tempIndex) => {
      if (tempIndex === index) {
        return false;
      } else {
        return true;
      }

      /*  if (
        cartProduct.id === product.id &&
        cartProduct.selectedSize === product.selectedSize
      ) {
        return false;
      } else {
        return true;
      }*/
    });

    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  return (
    <div
      key={`cart ${product.id} ${index}`}
      className={`flex gap-6 border-b border-gray-200 py-4 ${
        index === 0 ? 'border-t' : ''
      }`}
    >
      <Link to={`/products/${product.id}`} className='shrink-0 grow-0'>
        <img src={product.image} alt='' className='w-40' />
      </Link>

      <div className='flex w-full flex-col gap-1'>
        <div className='flex justify-between'>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          <div>{`$${(product.price * product.quantity).toLocaleString(
            'en-US'
          )}.00`}</div>
        </div>
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
        <div className='hidden text-gray-500 lg:block'>{product.colorway}</div>

        <div className='flex h-full flex-col justify-between'>
          <div className='flex gap-2 text-gray-500'>
            <div>
              Size
              <select
                onChange={handleSizeChange}
                value={product.selectedSize}
                className='border-none py-0 focus:ring-0'
              >
                {product.sizes.map((size, index) => (
                  <option key={`sizes ${product.id} ${index}`}>{size}</option>
                ))}
              </select>
            </div>
            <div>
              Quantity
              <select
                onChange={handleQuantityChange}
                value={product.quantity}
                className='border-none py-0 focus:ring-0'
              >
                {quantities.map((q, index) => (
                  <option key={`quantity ${product.id} ${index}`}>{q}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={handleDelete} className='mb-2'>
            <IoTrashOutline className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
