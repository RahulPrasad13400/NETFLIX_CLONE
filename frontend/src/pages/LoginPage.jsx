import { useState } from "react"
import { Link } from "react-router-dom"
  
export default function LoginPage() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (e) =>{
    e.preventDefault()

  }

  return (
    <div className='hero-bg h-screen w-full'>
        <header className='max-w-6xl mx-auto flex items-center p-4 justify-between'>
            <Link to={'/'}>
                <img src="/netflix-logo.png" alt="logo" className='w-32' />
            </Link>
      </header>
      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
            <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>
            <form action="" className='space-y-4' onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>Email</label>
                    <input type="email" className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                        focus:outline-none focus:ring'
                        placeholder='sample@gmail.com'
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>Password</label>
                    <input type="password" className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
                        focus:outline-none focus:ring'
                        placeholder='••••••••'
                        id='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button className='w-full py-2 bg-red-600 text-white font-semibold rounded
                    hover:bg-red-700    '>
                    Login 
                </button>
            </form>
            <div className='text-center text-gray-300 space-x-2'>
                Don't have an account?{" "}
                <Link to={'/signup'} className='text-red-500 hover:underline'>
                    Sign Up
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
