import React from 'react'
import '../../styles/global.css'

const Loader = () => {
  return (
    <div className='w-screen h-screen bg-black/50 grid place-content-center fixed z-20 backdrop-blur-sm top-0 left-0'>
      <span className='loader' />
    </div>
  )
}

export default Loader
