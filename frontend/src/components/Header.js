import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='topnav flex justify-between px-5 py-4 bg-slate-800 text-white'>
        <div>
          <a href="/" className='logo font-bold font-mvBoli text-xl'>Movie maker</a>
        </div>
        <div className='search-container'>
            <form>
                <a href="/" className=' font-semibold mr-3'>Add Movies</a>
                <input 
                  type="text"
                  placeholder='Search ...'
                  name='search' 
                   className='px-2 py-1 mr-2 rounded outline-none text-black'
                />
                <button type='submit' className='hover:bg-slate-500 p-2 rounded'>
                    <FaSearch />
                </button>
            </form>
        </div>        
    </div>
  )
}

export default Header