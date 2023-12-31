import React from 'react';

import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const ProductDetailsVariants = ({
  parentId,
  productId,
  setSelectedSize,
  client,
  GET_PRODUCT,
  setSelectedSizeError,
}) => {
  // Query variants from parent product id
  const GET_VARIANTS = gql`
    query Variants($parentId: ID!) {
      parentProduct(id: $parentId) {
        data {
          attributes {
            products {
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
          }
        }
      }
    }
  `;

  // Fetch variants
  const { data } = useQuery(GET_VARIANTS, {
    variables: { parentId },
  });

  return (
    <div>
      {data && (
        <div className='mt-6 grid grid-cols-5 gap-2'>
          {data.parentProduct.data.attributes.products.data.map((variant) => (
            <Link
              onMouseOver={() => {
                client.query({
                  query: GET_PRODUCT,
                  variables: { id: variant.id },
                });
              }}
              onClick={() => {
                setSelectedSize(0);
                setSelectedSizeError(false);
              }}
              to={`/products/${variant.id}`}
              key={`variant ${variant.id}`}
              className='relative'
            >
              <img
                src={variant.attributes.images.data[0]?.attributes.url}
                alt=''
              />
              <div
                className={`absolute left-0 top-0 h-full w-full border-solid border-black hover:border ${
                  variant.id === productId ? 'border' : ''
                }`}
              ></div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsVariants;
