import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-center p-4 h-20'> 
      <div className='flex items-center gap-10 z-50'>
            
            <Link to={'/'}>
                <img src="/netflix-logo.png" alt="Netflix logo" className='w-32 sm:w-40'/>
            </Link>
            
            {/* desktop navbar ( for small screens it will be hidden ) */}
            <div className='hidden sm:flex gap-2 items-center'>
                <Link to={'/'} className='hover:underline' >
                    Movies
                </Link>
                <Link to={'/'} className='hover:underline' >
                    Tv Shows
                </Link>
                <Link to={'/history'} className='hover:underline' >
                    Search History 
                </Link>
            </div>
      </div>
      
      {/* mobile NavBar items */}


    </header>
  )
}
