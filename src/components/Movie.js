import React from 'react'

const Movie = (props) => {
  return (
    <div className='card w-60 h-[21rem] md:w-64 md:h-[22rem] bg-slate-50 shadow-md py-2'>
        <img src={props.image} alt='Movie' className='h-64'  />
        <div className='container px-5 md:mt-3'>
            <h2 className='text-xl line-clamp-2 md:font-bold'>{props.name}</h2>
            <h4 className='font-semibold'>{props.genre} - {props.year}</h4>
        </div>
    </div>
  )
}

export default Movie