import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <div className='w-full md:px-52 h-screen mt-24 flex justify-center'>
        <div className='relative w-1/2'>
            <Image src='/images/about_img_02.png' alt='image' width={600} height={600} className='z-1'/>
            <Image src='/images/about_img_03.png' alt='image' width={300} height={300} className='absolute bottom-20 right-20'/>

        </div>
        <div className='flex-1'>
            <h1 className='flex gap-1 text-3xl uppercase text-brown-2'>About Us</h1>
            <h2 className='text-7xl font-serif font-semibold mt-5'>Would  You  Like</h2>
            <h2 className='text-7xl font-serif font-semibold'>Delicious  Coffee</h2>
            <p className='text-gray-400 text-xl mt-5'>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p>
            <p className='text-gray-400 text-xl mt-5'>
            Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.
            </p>
            <div className='flex justify-between items-center mt-10'>
                <div>
               <Image src='/images/signature.png' alt='image' width={100} height={100} className=''/>
               <h1 className='text-3xl font-serif font-semibold'>Alfredo Pasta</h1>
                    
                </div>
                <Button className='bg-brown-1 h-12'>DISCOVER MORE</Button>
            </div>
        </div>
    </div>
  )
}

export default About