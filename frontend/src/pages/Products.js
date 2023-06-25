import React, { useState, useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GiSettingsKnobs } from 'react-icons/gi';

import ProductsFilters from '../components/ProductsFilters';

const Products = () => {
  const [productList, setProductList] = useState();
  const [showFilters, setShowFilters] = useState(false);

  const GET_PRODUCTS = gql`
    query Products {
      products {
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
            price
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

  const { data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      const shuffleArray = (array) => {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }

        return shuffledArray;
      };
      const shuffledArray = shuffleArray(data.products.data);

      setProductList(shuffledArray);
    }
  }, [data]);

  return (
    <div className='mt-[60px]'>
      {productList && (
        <div>
          <div className='flex h-10 items-center justify-end gap-2 px-6 lg:h-24 lg:px-12'>
            <button
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            >
              Show Filters
            </button>
            <button
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            >
              <GiSettingsKnobs className='h-fit items-center text-xl' />
            </button>
          </div>
          <div className='lg:flex lg:px-12'>
            <ProductsFilters showFilters={showFilters} />
            <div className='grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4'>
              {productList.map((product) => (
                <Link
                  key={`product ${product.id}`}
                  to={`/products/${product.id}`}
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}${product.attributes.images.data[0].attributes.url}`}
                    alt=''
                  />
                  <div className='pb-4 pl-2 pt-2'>
                    <div>
                      {product.attributes.parent_product.data.attributes.name}
                    </div>
                    <div className='text-gray-500'>{`${
                      product.attributes.category.data.attributes.name
                        .charAt(0)
                        .toUpperCase() +
                      product.attributes.category.data.attributes.name.slice(1)
                    } Shoes`}</div>
                    <div className='pt-2'>{`$${product.attributes.price}`}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
