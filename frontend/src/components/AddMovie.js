import React from 'react'

const AddMovie = () => {
  return (
    <div className='addMovie flex justify-center items-end py-5 shadow-sm mt-2'>
        <form onSubmit={() => alert('Movie added😁')}>
            <label>Name</label>
            <input 
              type="text"
              required
              className='px-2 py-1 mx-2 rounded outline-none text-black border'
            />
            <label>Genre</label>
            <input 
              type="text"
              required
              className='px-2 py-1 mx-2 rounded outline-none text-black border'
            />
            <label>Year</label>
            <input
              type="text"
              placeholder='(optional)'
              required
              className='px-2 py-1 mx-2 rounded outline-none text-black border'
            />
            <button 
              type='submit'
              className='px-4 py-1 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded'
            >
                Add Movie
            </button>
        </form>
    </div>
  )
}

export default AddMovie