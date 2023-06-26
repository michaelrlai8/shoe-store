import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = ({ arrangedProducts }) => {
  return (
    <div>
      {arrangedProducts && (
        <div className='grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4'>
          {arrangedProducts.map((product) => (
            <Link key={`product ${product.id}`} to={`/products/${product.id}`}>
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
      )}
    </div>
  );
};

export default ProductsList;
