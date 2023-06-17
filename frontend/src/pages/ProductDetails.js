import React, { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

const ProductDetails = () => {
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

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  useEffect(() => {
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${id}/${data.product.data.attributes.slug}`);
      console.log(data);
    }
  });

  return (
    <div className='mt-24'>
      {data && (
        <div className='w-screen lg:flex'>
          <div className='w-full'>
            <img
              src={`${process.env.REACT_APP_API_URL}${data.product.data.attributes.images.data[0].attributes.url}`}
              alt=''
              className='w-full'
            />
          </div>
          <div className='w-full'>
            <div className='px-6'>
              <div>{data.product.data.attributes.name}</div>
              <div>
                {data.product.data.attributes.category.data.attributes.name}
              </div>
              <div>{`$${data.product.data.attributes.price}`}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
