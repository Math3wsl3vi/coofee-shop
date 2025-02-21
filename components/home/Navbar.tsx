import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {

  return (
    <div className='w-full h-20 sticky top-0 bg-brown-1 text-white flex flex-row items-center justify-between px-2 md:px-32 md:gap-20 z-50'>
        <div>LOGO</div>
        <div className='flex-1 justify-end flex items-center gap-20'>
            <ul className='flex gap-10'>
                <Link href={'/'} className='text-xl uppercase'>Home</Link>
                <Link href={'/'} className='text-xl uppercase'>About</Link>
                <Link href={'/'} className='text-xl uppercase'>Menu</Link>
                <Link href={'/'} className='text-xl uppercase'>Products</Link>
                <Link href={'/'} className='text-xl uppercase'>Contact</Link>
            </ul>
            <Button className='bg-brown-2'>Book A Table</Button>
        </div>
    </div>

  )
}

export default Navbar
