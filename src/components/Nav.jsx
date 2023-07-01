import React from 'react'

const Nav = () => {
    return (
        <div className='w-full p-4 bg-gray-200  rounded-md border  flex justify-around items-center'>
            <div className="search">
                <input type="search" name="" id="" placeholder='search...' className='pl-2' />
            </div>
            <div className="filters flex justify-center gap-2 items-center">
                <h1 className='mr-10 font-bold'>Filters</h1>
                Name<input type="radio" name="" id="" className=' border border-black p-4 pl-3 cursor-pointer' />
                Ingrediants<input type="radio" name="" id="" className=' border border-black p-4 pl-3  cursor-pointer' />
                Cusine<input type="radio" name="" id="" className=' border border-black p-4 pl-3   cursor-pointer' />
            </div>
        </div>
    )
}

export default Nav
