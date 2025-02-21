import React from 'react'
import { Featuresdata } from './../../lib/data'
import Image from 'next/image'
import { Button } from '../ui/button'

const Features = () => {
  return (
    <div className='w-full flex items-center flex-col'>
        <h1 className='text-3xl uppercase text-brown-2 text-center'>OUR FEATURES</h1>
        <h2 className='text-7xl font-serif font-semibold mt-5 text-center'>What We Provide For You</h2>
        <p className='text-center text-gray-400 text-xl w-1/2 mt-10'>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
        <div className='grid grid-cols-4 gap-10 md:px-52'>
            {Featuresdata.map((item, index)=> (
                <div key={index} className='bg-slate-50 shadow-sm h-70 flex flex-col p-5 mt-20 cursor-pointer hover:translate-y-1 hover:transform'>
                    <Image src={item.imgSrc} alt={item.name} width={50} height={50}/>
                    <h1 className='font-serif text-3xl font-semibold mt-5'>{item.name}</h1>
                    <p className='text-gray-400 mt-5 text-lg'>{item.desc}</p>
                    <Button className='w-1/2 bg-brown-1 mt-5'>Learn More</Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features