import React from 'react';

import main from '../assets/main.jpg';

const Home = () => {
  return (
    <div className='absolute top-0 h-screen w-screen'>
      <img
        src={main}
        alt=''
        className='h-screen w-screen object-cover brightness-75'
      />
      <div className='right- absolute bottom-0 flex w-full flex-col gap-4 px-6 py-20 text-white lg:items-end lg:px-20 lg:py-24'>
        <div className='text-4xl font-bold'>This is a shoe store</div>
        <div className='font-semibold'>
          You can find shoes for every activity here
        </div>
        <div>
          <button className='bg-white px-8 py-2 text-black'>SHOP NOW</button>
        </div>
      </div>
      <div className='absolute bottom-0 w-screen bg-orange-600 py-1 text-center text-lg text-white'>
        Now with free shipping on all orders!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro
        aspernatur dicta repellat asperiores voluptates vitae reprehenderit
        molestiae? Nam beatae minus voluptatibus eveniet, repudiandae vitae quos
        quas harum voluptas aperiam exercitationem quibusdam error incidunt
        doloremque reprehenderit nisi inventore unde ullam sequi? Ea, laudantium
        nisi? Harum pariatur rerum quas consectetur eius, error labore nesciunt
        aspernatur officia fuga, quidem maxime! Nemo, quam ipsa! Deserunt, quis
        sapiente earum illo impedit, quae inventore veritatis qui, nostrum
        aliquid repudiandae vero labore nulla temporibus blanditiis consequatur
        facilis molestiae! Veniam, atque velit beatae commodi vitae provident
        nesciunt cumque similique? Sit ad perferendis dignissimos repellat
        dolorem nemo fugit ipsam nam et iusto inventore assumenda, praesentium,
        vel id. Earum voluptate doloremque eligendi sed, quaerat quisquam fugit
        odio nisi facilis, id accusantium officia eveniet. Voluptatibus vero
        aliquam, at sunt provident voluptate labore quasi sed fuga iure
        voluptates, ipsam laborum, tempore deleniti quidem architecto deserunt
        rem beatae minima a! Quos itaque molestiae culpa, ut iste eaque hic vel
        esse nobis, mollitia perferendis saepe nam dolores error! Illum
        excepturi, iure obcaecati cum molestias magni, iusto facilis maxime,
        saepe fuga libero molestiae nobis at possimus optio tempora. Excepturi,
        error voluptates. Ex, distinctio nihil quas mollitia deleniti ea,
        dignissimos eos, expedita hic nostrum consectetur!
      </div>
    </div>
  );
};

export default Home;

/*
  
      <div className='h-screen w-screen'>
        <div className='h-full lg:flex'>
          <img
            src={Main}
            alt='shoes on a branch'
            className='order-2 h-3/4 object-cover lg:h-full lg:w-1/2'
          />
          <div className='order-1 justify-center lg:flex lg:h-5/6 lg:w-1/2 lg:flex-col lg:gap-4'>
            <div className='h-full px-2 pb-14 pt-14 text-center text-3xl font-bold lg:h-fit lg:p-0 lg:px-20 lg:text-6xl'>
              Store that sells shoes
            </div>
            <div className='px-10 pb-10 text-center text-xl lg:pb-4'>
              We sell shoes for every occasion. Find your perfect pair today!
            </div>
            <div className='text-center'>
              <button className='bg-black px-8 py-4 text-white'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        hidfs
      </div>

  */

/*

<div className='h-full w-screen flex-grow lg:relative'>
      <img
        src={Main}
        alt=''
        className='h-[85%] object-cover lg:h-full lg:w-screen lg:object-[30%]'
      />
      <div className='h-[15%] lg:absolute lg:left-0 lg:top-0 lg:h-full'>
        <div className='h-full lg:-mt-[5%] lg:flex lg:h-full lg:flex-col lg:justify-center'>
          <div className='flex h-full flex-col items-center justify-center lg:h-fit'>
            <div className='text-2xl font-bold lg:pb-2 lg:text-4xl'>
              A store that sells shoes
            </div>
            <div className='lg:pb-2'>
              Find shoes for all of your needs here.
            </div>
          </div>
          <div className='text-center'>
            <button className='bg-black px-6 py-2 text-white'>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className=''>test</div>
    </div>
    */
