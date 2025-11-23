import React from 'react'

async function page() {
    await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("loding"); 
    },6000);
  })
  return (
    <div className='font-bold text-5xl flex justify-center items-center h-[30vh] w-full'>THIS IS TH <span className='font-bold text-pink-900'>LOGIN</span>PAGE</div>
  )
}

export default page