import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

import {
  IoChevronDown,
  IoChevronUp,
  IoChevronBack,
  IoChevronForward,
} from 'react-icons/io5';

const ProductDetails = () => {
  const [showShippingPolicy, setShowShippingPolicy] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState();

  const { id, name } = useParams();
  const navigate = useNavigate();

  const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
      product(id: $id) {
        data {
          id
          attributes {
            name
            description
            price
            color
            sizes
            slug
            colorway
            variants {
              data {
                id
                attributes {
                  name
                  images {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  colorway
                }
              }
            }
            category {
              data {
                id
                attributes {
                  name
                }
              }
            }
            images {
              data {
                id
                attributes {
                  url
                  width
                  height
                  hash
                }
              }
            }
          }
        }
      }
    }
  `;

  const { error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (error) console.log(error);

  useEffect(() => {
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${id}/${data.product.data.attributes.slug}`);
      console.log(data);
    }
  });

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const previousPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const nextPhoto = () => {
    if (
      currentPhotoIndex <
      data.product.data.attributes.images.data.length - 1
    ) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div className='mt-[60px]'>
      {data && (
        <div className='w-screen lg:flex'>
          <div className='relative w-full lg:ml-12'>
            <img
              src={`${process.env.REACT_APP_API_URL}${data.product.data.attributes.images.data[currentPhotoIndex].attributes.url}`}
              alt=''
              className='w-full'
            />
            <div className='absolute right-6 top-6 flex gap-3 text-2xl'>
              <button onClick={previousPhoto}>
                <IoChevronBack />
              </button>
              <button onClick={nextPhoto}>
                <IoChevronForward />
              </button>
            </div>
          </div>

          <div className='w-full pt-6 lg:w-2/3 lg:pt-0'>
            <div className='px-6 lg:px-12'>
              <div className='text-3xl'>
                {data.product.data.attributes.name}
              </div>
              <div className=''>
                {`${capitalizeFirst(
                  data.product.data.attributes.category.data.attributes.name
                )}'s`}
              </div>
              <div>{`$${data.product.data.attributes.price}`}</div>
              <div className='mt-6 grid grid-cols-5 gap-2'>
                {data.product.data.attributes.variants.data.map((variant) => (
                  <Link
                    onClick={() => setSelectedSize(0)}
                    to={`/products/${variant.id}`}
                    key={variant.attributes.colorway}
                    className='relative'
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL}${variant.attributes.images.data[0].attributes.url}`}
                      alt=''
                    />
                    <div
                      className={`absolute left-0 top-0 h-full w-full border-solid border-black hover:border ${
                        variant.id === data.product.data.id ? 'border' : ''
                      }`}
                    ></div>
                  </Link>
                ))}
              </div>
              <div className='mt-6'>
                <div>Sizes</div>
              </div>
              <div className='mt-2 grid grid-cols-5 gap-2'>
                {data.product.data.attributes.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`border border-solid py-2 text-center hover:border-black ${
                      selectedSize === size ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className='mt-2'>
                {data.product.data.attributes.colorway}
              </div>
              <div className='mt-6 text-center'>
                <button className='w-full bg-black py-4 text-white hover:bg-gray-500'>
                  ADD TO BAG
                </button>
              </div>

              <div className='mt-6 border-t border-gray-200 py-6'>
                <div
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className='flex justify-between hover:cursor-pointer'
                >
                  <div className='text-xl'> Sizing Guide</div>
                  <div className='flex items-center pr-2 text-2xl'>
                    {showSizeGuide ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                </div>
                {showSizeGuide && (
                  <div className='pt-6'>
                    <div>
                      1. Step on a piece of paper with your heel slightly
                      touching a wall behind.
                    </div>
                    <div>
                      2. Mark the end of your longest toe on the paper (you
                      might need a friend to help you) and measure from the wall
                      to the marking.
                    </div>
                    <div>
                      3. Do the same for the other foot and compare measurements
                      with our size chart to get the right size.
                    </div>
                  </div>
                )}

                <div className='mt-6 border-b border-t border-gray-200 py-6'>
                  <div
                    onClick={() => setShowShippingPolicy(!showShippingPolicy)}
                    className='flex justify-between hover:cursor-pointer'
                  >
                    <div className='text-xl'> Shipping & Returns</div>
                    <div className='flex items-center pr-2 text-2xl'>
                      {showShippingPolicy ? <IoChevronUp /> : <IoChevronDown />}
                    </div>
                  </div>
                  {showShippingPolicy && (
                    <div className='pt-6'>
                      Free standard shipping on orders $50+ and free 60-day
                      returns
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
