import React from 'react'
import Link  from 'next/link';
const froutsList = Array.from({length:60}, (_,index)=>(
    {
    id:index+1 ,
    name : `frout ${index+1}`,
    }
  
));
async function page({searchParams}:{searchParams:Promise<{page?:string}>}) {
    const pageNumbertostring = (await searchParams).page ;
    const pageNumber = Number(pageNumbertostring);
    const itemsparpage = 10;
    const start = (pageNumber-1)* itemsparpage;
    const end = start + itemsparpage;
    const items = froutsList.slice(start, end);
    const totalpage = Math.ceil(froutsList.length/itemsparpage);
  return (
    <div className='w-full flex justify-center items-center gap-6 flex-col'>
        <div className='flex justify-center items-center gap-12 flex-wrap p-6 w-full'>
        {items.map((frout)=>(
            <div key={frout.id} className='w-52 h-52 flex shadow-md shadow-gray-600 justify-center items-center p-12 flex-wrap bg-black text-white font-bold text-2xl'>
                <h1>{frout.name}</h1>
            </div>
        ))}
        </div>
            <Pagenation currentpage= {pageNumber} totalpage={totalpage} />
    </div>
  )
}

export default page


function Pagenation({currentpage, totalpage}:{currentpage:number,totalpage:number}){
    const listPage= Array.from({length:totalpage}, (_,i)=>i+1);
    return(
      <div className=' flex flex-col justify-between items-center w-full'>
        <h1 className='text-2xl border-b font-bold'>Page {currentpage} Of {totalpage}</h1>
        <div className='flex justify-between items-center w-full px-12 py-3'>
            {currentpage>1 && (
                <Link className='px-6 py-3 hover:shadow-2xs border shadow-md shadow-gray-900' href={`?page=${currentpage-1}`}>Previous</Link>
            )}
            {listPage.map((number)=>(
                <Link className='px-3 py-2 hover:shadow-2xs border shadow-md shadow-gray-900' key={number} href={`?page=${number}`}>{number}</Link>
            ))}
          {currentpage> 1 && (
            <Link className='px-6 py-3 hover:shadow-2xs border shadow-md shadow-gray-900' href={`?page=${currentpage+1}`}>Next</Link>
          )}
        </div>
        </div>
    )
}