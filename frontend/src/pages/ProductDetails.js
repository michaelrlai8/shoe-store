import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Footer from '../components/Footer';
import ProductDetailsSizes from './ProductDetailsSizes';
import ProductDetailsVariants from './ProductDetailsVariants';

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

  // Query product details
  const GET_PRODUCT = gql`
    query Product($id: ID!) {
      product(id: $id) {
        data {
          id
          attributes {
            parent_product {
              data {
                id
              }
            }
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
                  images {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
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

  // Fetch product details
  const { data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  /*  // Query product variants
  const GET_VARIANTS = gql``;

  // Fetch product variants via parent product
  const { parentData } = useQuery(GET_VARIANTS, {
    variables: { id },
  }); */

  // On component update and initial render, check if slug matches slug in database. If not, change it to slug in database
  useEffect(() => {
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${id}/${data.product.data.attributes.slug}`);
    }
  });

  return (
    <div className='mt-[60px]'>
      {data && (
        <div>
          <div className='w-screen lg:flex'>
            <div className='relative w-full lg:ml-12'>
              <img
                src={`${process.env.REACT_APP_API_URL}${data.product.data.attributes.images.data[currentPhotoIndex].attributes.url}`}
                alt=''
                className='w-full'
              />
              <div className='absolute right-6 top-6 flex gap-3 text-2xl'>
                <button
                  onClick={() => {
                    if (currentPhotoIndex > 0) {
                      setCurrentPhotoIndex(currentPhotoIndex - 1);
                    }
                  }}
                >
                  <IoChevronBack />
                </button>
                <button
                  onClick={() => {
                    if (
                      currentPhotoIndex <
                      data.product.data.attributes.images.data.length - 1
                    ) {
                      setCurrentPhotoIndex(currentPhotoIndex + 1);
                    }
                  }}
                >
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
                  {`${
                    data.product.data.attributes.category.data.attributes.name
                      .charAt(0)
                      .toUpperCase() +
                    data.product.data.attributes.category.data.attributes.name.slice(
                      1
                    )
                  }'s`}
                </div>
                <div>{`$${data.product.data.attributes.price}`}</div>

                <ProductDetailsVariants
                  parentId={data.product.data.attributes.parent_product.data.id}
                  productId={data.product.data.id}
                  setSelectedSize={setSelectedSize}
                />

                <ProductDetailsSizes
                  id={id}
                  sizes={data.product.data.attributes.sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />

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
                        might need a friend to help you) and measure from the
                        wall to the marking.
                      </div>
                      <div>
                        3. Do the same for the other foot and compare
                        measurements with our size chart to get the right size.
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
                        {showShippingPolicy ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        )}
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
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
