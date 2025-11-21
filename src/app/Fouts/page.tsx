import React from 'react'
const froutsList = Array.from({length:60}, (_,index)=>(
    {
    id:index+1 ,
    name : `frout ${index+1}`,
    }
  
));
async function page({searchParams}:{searchParams:Promise<{page?:string}>}) {
    const pageNumbertostring = (await searchParams).page ;
    const pageNumber = Number(pageNumbertostring);
    const itemsparpage = 9;
    const start = (pageNumber-1)* itemsparpage;
    const end = start + itemsparpage;
    const items = froutsList.slice(start, end);
    const totalpage = Math.ceil(froutsList.length/itemsparpage);
  return (
    <div className='w-full flex justify-center items-center gap-6 flex-col'>
        <div className='flex justify-center items-center gap-5 w-full'>
        {items.map((frout)=>(
            <div key={frout.id} className='w-52 h-52 flex justify-center items-center font-bold text-2xl'>
                <h1>{frout.name}</h1>
            </div>
        ))}
        </div>
    </div>
  )
}

export default page