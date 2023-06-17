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
    console.log('hi');
    if (data && name !== data.product.data.attributes.slug) {
      navigate(`/products/${id}/${data.product.data.attributes.slug}`);
    }
  }, [data]);

  return (
    <div className='mt-36'>
      <div>ProductDetails</div>
      <div>{name}</div>
    </div>
  );
};

export default ProductDetails;
