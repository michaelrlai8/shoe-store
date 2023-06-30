import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Footer from '../components/Footer';
import ProductDetailsCarousel from '../components/ProductDetailsCarousel';
import ProductDetailsDropdowns from '../components/ProductDetailsDropdowns';
import ProductDetailsSizes from '../components/ProductDetailsSizes';
import ProductDetailsVariants from '../components/ProductDetailsVariants';
import ProductAddedPopup from '../components/ProductAddedPopup';

const ProductDetails = ({ cart, setCart, cartQuantity, setCartQuantity }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedSizeError, setSelectedSizeError] = useState(false);
  const [showProductAddedPopup, setShowProductAddedPopup] = useState(false);

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
  const { data, client } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  // Check if slug matches slug in database. If not, change it to slug in database
  useEffect(() => {
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${data.product.data.attributes.slug}/${id}`);
    }
  }, [data, name, navigate, id]);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSelectedSizeError(true);
    } else {
      setShowProductAddedPopup(true);

      const item = {
        id: data.product.data.id,
        name: data.product.data.attributes.parent_product.data.attributes.name,
        category: data.product.data.attributes.category.data.attributes.name,
        colorway: data.product.data.attributes.colorway,
        sizes: data.product.data.attributes.sizes,
        selectedSize: selectedSize,
        quantity: 1,
        price: data.product.data.attributes.price,
        image: data.product.data.attributes.images.data[0].attributes.url,
      };

      const checkDuplicate = cart.findIndex(
        (product) =>
          product.id === item.id && product.selectedSize === item.selectedSize
      );

      let tempCart;
      if (checkDuplicate > -1) {
        tempCart = [...cart];
        tempCart[checkDuplicate].quantity += 1;
      } else {
        tempCart = [...cart, item];
      }
      setCart(tempCart);
      setCartQuantity(
        tempCart.reduce((a, b) => {
          return a + b.quantity;
        }, 0)
      );
      localStorage.setItem('cart', JSON.stringify(tempCart));
    }
  };

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
                  {data.product.data.attributes.category.data.attributes
                    .name === 'kids'
                    ? `${
                        data.product.data.attributes.category.data.attributes.name
                          .charAt(0)
                          .toUpperCase() +
                        data.product.data.attributes.category.data.attributes.name.slice(
                          1
                        )
                      }' Shoes`
                    : `${
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
                  client={client}
                  GET_PRODUCT={GET_PRODUCT}
                  setSelectedSizeError={setSelectedSizeError}
                />

                <ProductDetailsSizes
                  id={id}
                  sizes={data.product.data.attributes.sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedSizeError={selectedSizeError}
                  setSelectedSizeError={setSelectedSizeError}
                />

                <div className='mt-2'>
                  {data.product.data.attributes.colorway}
                </div>
                <div className='mt-6 text-center'>
                  <button
                    onClick={handleAddToBag}
                    className='w-full bg-black py-4 text-white hover:bg-gray-500'
                  >
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
          {showProductAddedPopup && (
            <ProductAddedPopup
              data={data}
              selectedSize={selectedSize}
              setShowProductAddedPopup={setShowProductAddedPopup}
            />
          )}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
