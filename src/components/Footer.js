import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex justify-center items-end px-5 py-4 bg-slate-800 text-white'>
        <p>
          Copyright &copy; Movie maker
          { new Date().getFullYear() }
        </p>
    </div>
  )
}

export default Footer