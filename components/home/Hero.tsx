import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div 
      className="w-full h-screen bg-[url('/images/coffee1.jpg')] bg-cover bg-center flex items-center justify-center px-52"
    >
    <div className='flex flex-col gap-5 text-white '>
      <h1 className="text-white text-3xl uppercase font-poppins font-bold">Welcome to Coffee Shop</h1>
      <h1 className='text-7xl font-poppins font-bold'>Enjoy Your Morning</h1>
      <h1 className='text-7xl font-poppins font-bold'>Coffee Shot</h1>
      <p className='text-xl font-semibold  w-1/3 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias corrupti nostrum incidunt quidem commodi ea doloremque suscipit accusantium veniam numquam neque, quas accusamus. Ipsum quisquam provident corporis deleniti asperiores.</p>
      <div className='flex gap-10'>
        <Button className='bg-brown-1 h-12'>Book A Table</Button>
        <Button className='bg-white text-black h-12'>Visit Our Shop</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
