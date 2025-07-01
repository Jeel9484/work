import React from 'react'
import { FaHeart } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white px-4 py-6'>
          <div className='flex flex-wrap justify-center md:justify-start items-center text-center'>
          © 2021, Made with <span className="text-pink-400"><FaHeart /></span> by Simple & Creative Tim for a better web.
          </div>
      <div className='flex justify-center gap-6 mt-2'>
        <div className="text-white cursor-pointer">Marketplace</div>
        <div className="text-white cursor-pointer">Blog</div>
        <div className="text-white cursor-pointer">License</div>
      </div>
    </div>

  )
}

export default Footer