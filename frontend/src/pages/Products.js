import React, { useState, useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

const Products = () => {
  const [productList, setProductList] = useState();

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

  const { data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      setProductList(data.products.data);
    }
  });

  return <div>{productList && productList.map(() => <div>hi</div>)}</div>;
};

export default Products;
