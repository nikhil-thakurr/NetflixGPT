import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%]  flex justify-center' >

        <form action="" className='bg-black  w-1/2 grid grid-cols-12'>

            <input type="text" placeholder='What you would like to watch today  '  className='col-span-9 p-4 m-4'/>
            <button className='bg-red-700 col-span-3 p-4 m-4 rounded-lg'>Search</button>

        </form>

    </div>
  )
}

export default GptSearchBar