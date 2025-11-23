async function Home() {
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("loding"); 
    },6000);
  })
  return (
  <div className='font-bold text-5xl flex justify-center items-center h-[30vh] w-full'>THIS IS THE <span className='font-bold text-pink-900'> Home </span>PAGE</div>
  );
}
export default Home
