import React from 'react'

function loading() {
  return (
    <div className='h-[50vh] w-full flex justify-center items-center'>
      <div className='h-20 w-20 rounded-full border-4 border-gray-300 border-t-cyan-700 animate-spin'></div>
    </div>
  )
}

export default loading
