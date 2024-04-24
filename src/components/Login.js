import React ,{useState} from 'react'
import Header from './Header'

const Login = () => {
    const [handleToggle,sethandleToggle] =useState(false);
  return (
    <div>
   <Header/>
   <div>
    <img className='absolute ' src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix-Image" />
   </div>

   <form className='absolute w-3/12 p-12 bg-black m-auto right-0 left-0 my-32 flex flex-col text-white bg-opacity-80 '>
    {(!handleToggle)?<h1 className='text-3xl py-4'>Sign In</h1>:<h1 className='text-3xl py-4'>Sign Up</h1>}
    {handleToggle && <input type="text" name="" id="" placeholder='Full Name' className='p-4 my-4 bg-gray-700 bg-opacity-70' />}
    <input type="text" name="" id="" placeholder='Email' className='p-4 my-4 bg-gray-700 bg-opacity-70' />
    <input type="password" name="" id="" placeholder='Password' className='p-4 my-4 bg-gray-700 bg-opacity-70' />
    {(!handleToggle)?<button className='py-4 bg-red-700 my-6'>Sign In</button>:<button className='py-4 bg-red-700 my-6'>Sign Up</button>}

    {(!handleToggle)?<p className='py-4 cursor-pointer' onClick={()=>sethandleToggle(!handleToggle)}><span className='text-gray-400'>New to Netflix ?</span> Sign Up Now .</p>:<p className='py-4 cursor-pointer' onClick={()=>sethandleToggle(!handleToggle)}><span className='text-gray-400'>Already an User ?</span> Sign In Now .</p>}
   </form>
   </div>
  )
}

export default Login