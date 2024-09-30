import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/backgroundImageLogin.jpeg'
// import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div
        className="w-full h-screen bg-cover object-contain bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-full h-full">
            <div className='w-2/5 gap-12 bg-white m-4 p-0.5 rounded-3xl shadow-gray-900 h-auto py-16 flex flex-col items-center justify-center'>
            <h1 className='my-0 gamja-flower text-green-600 text-8xl'>SpoTheFaker</h1>
            <h2 className='my-0 text-5xl arial font-medium'>Sign up and<br />Play Free</h2>
            <form className='   flex flex-col w-72 gap-4 round' action="">
                <input className='rounded-3xl py-3 text-center font-semibold outline-green-600' 
                    type="text" 
                    placeholder='username'
                />
                <input className='rounded-3xl py-3 text-center font-semibold outline-green-600'
                    type="password" 
                    placeholder='password'
                />

                <h2 className='arial text-sm font-bold'>I Accept the <span className='text-green-600 '> Privacy Policy </span> </h2>
                <button className='py-3 gamja-flower rounded-3xl bg-black text-white text-xl '>CREATE AN ACCOUNT</button>

                <h2 className='arial text-sm font-bold'>Already Have An Account? <span className='text-green-600 '><Link className='text-green-600 no-underline font-semibold' to='signup'> Signup</Link> </span> </h2>
            </form>
            </div>
          </div>
        </div>
      );
    
}

export default Login
