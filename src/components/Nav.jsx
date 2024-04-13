import React from 'react'

function Nav() {
  return (
    <nav className='flex justify-between py-3 px-6'>
        <div>DeshTheke</div>
        <div className='w-fit flex gap-6 '>
            <a className='hover:underline hover:underline-offset-4'>New</a>
            <a className='hover:underline hover:underline-offset-4'>Classics</a>
            <a className='hover:underline hover:underline-offset-4'>Bestsellers</a>
            <a className='hover:underline hover:underline-offset-4'>DIY</a>
            <a className='hover:underline hover:underline-offset-4'>Wholesale</a>
            <a className='hover:underline hover:underline-offset-4'>FAQ</a>
        </div>
        <div className='flex gap-3'>
            <button className="bg-gray-8">Sign Up</button>
            <button className="bg-gray-8">Log In</button>         
            <input className='rounded-lg border-[1px] p-1 indent-2' type='text' placeholder='Search'/>   
        </div>
    </nav>
  )
}

export default Nav