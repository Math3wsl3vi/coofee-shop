import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'


const Booking = () => {
  return (
    <div className='px-60 w-full mt-20'>
       <div className='bg-brown-1 flex justify-between'>
       <div className='w-1/2 p-5 py-10'>
        <h1 className='uppercase text-4xl font-serif text-white font-semibold px-6'>Contact Us</h1>
        <p className='text-white font-semibold text-6xl font-poppins mt-5 px-6'>Book Your Table Now !</p>
        <div className='p-5 mt-10 flex flex-col gap-10'>
        <Input  placeholder='First Name' className='h-20 bg-brown-3 border-none'/>
        <div className='flex flex-row justify-between gap-10'>
        <Input placeholder='Email'  className='h-20 bg-brown-3 border-none'/>
        <Input  placeholder='Phone Number' className='h-20 bg-brown-3 border-none'/>
        </div>
        <div className='flex flex-row justify-between gap-10'>
        <Input placeholder='Date'  className='h-20 bg-brown-3 border-none'/>
        <Input  placeholder='Time' className='h-20 bg-brown-3 border-none'/>
        </div>
        <Button className='h-20 bg-white text-2xl text-brown-3'>BOOK TABLE NOW</Button>
        </div>
       </div>
       <div className='w-1/2'>
         <Image src='/images/booking-img.png' alt='image' width={830} height={700} className='z-1'/>
         </div>
       </div>
    </div>
  )
}

export default Booking