import React from 'react';

const Products = () => {
  return (
    <div className='mt-32'>
      <img
        src={`${process.env.REACT_APP_API_URL}/uploads/Ultraboost_1_0_Shoes_Black_HQ_4199_01_standard_d80981f708.jpg`}
        alt=''
      />
    </div>
  );
};

export default Products;
