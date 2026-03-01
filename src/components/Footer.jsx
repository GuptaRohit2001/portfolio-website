import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='py-8 bg-dark-300'>
      <div className='container mx-auto px-6 text-center'>
        <p className='text-gray-400'>© {currentYear} Created By Rohit Gupta. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer