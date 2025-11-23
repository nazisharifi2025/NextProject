"use client";
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

function error({error,reset}:{error:Error,reset:()=>void}) {
    const router = useRouter();
    function handelClick(){
        router.refresh();
        startTransition(()=>{
            reset();
        })
    }
  return (
    <div className='h-screen w-full flex justify-center items-center text-3xl font-bold'>
        <h1>please wiat</h1>
        <button onClick={()=>handelClick()}>try again</button>
    </div>
  )
}

export default error