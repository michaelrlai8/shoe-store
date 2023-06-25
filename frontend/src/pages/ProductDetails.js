import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Footer from '../components/Footer';
import ProductDetailsCarousel from '../components/ProductDetailsCarousel';
import ProductDetailsDropdowns from '../components/ProductDetailsDropdowns';
import ProductDetailsSizes from '../components/ProductDetailsSizes';
import ProductDetailsVariants from '../components/ProductDetailsVariants';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState();

  const { id, name } = useParams();
  const navigate = useNavigate();

  // Query product details from product id
  const GET_PRODUCT = gql`
    query Product($id: ID!) {
      product(id: $id) {
        data {
          id
          attributes {
            parent_product {
              data {
                id
                attributes {
                  name
                }
              }
            }
            description
            price
            color
            sizes
            slug
            colorway
            category {
              data {
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

  // Check if slug matches slug in database. If not, change it to slug in database
  useEffect(() => {
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${data.product.data.attributes.slug}/${id}`);
    }
  });

  if (data) {
    console.log(data);
  }

  return (
    <div className='mt-[60px]'>
      {data && (
        <div>
          <div className='w-screen lg:flex'>
            <ProductDetailsCarousel data={data} />

            <div className='w-full pt-6 lg:w-2/3 lg:pt-0'>
              <div className='px-6 lg:px-12'>
                <div className='text-3xl'>
                  {
                    data.product.data.attributes.parent_product.data.attributes
                      .name
                  }
                </div>
                <div className='text-gray-500'>
                  {`${
                    data.product.data.attributes.category.data.attributes.name
                      .charAt(0)
                      .toUpperCase() +
                    data.product.data.attributes.category.data.attributes.name.slice(
                      1
                    )
                  }'s Shoes`}
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

                <div className='mt-12'>
                  {data.product.data.attributes.description}
                </div>

                <ProductDetailsDropdowns />
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
