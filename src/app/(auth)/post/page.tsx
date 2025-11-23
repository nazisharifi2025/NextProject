
function randomNumber(num:number){
    return Math.floor(Math.random()*num);
}
function page(){
    const num = randomNumber(3);
    if(num <4){
        throw new Error('Random Error Occurred');
        
    }
  return (
    <div className='flex justify-center items-center text-3xl font-bold'>
        Post Page
          
        </div>
  
  )
}

export default page