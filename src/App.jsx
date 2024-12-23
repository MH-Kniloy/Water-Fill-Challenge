import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [water, setWater] = useState(0)
  const [animatestop, setAnimateStop] = useState(false)
  useEffect(()=>{
    setAnimateStop(true)

    const animateTime = setTimeout(()=> setAnimateStop(false), 3000)

    return ()=>{

      clearTimeout(animateTime)
    }
    
  }, [water])
  console.log(animatestop)

  const handleFill = () => {
    setWater((prev)=>{
      if(prev === 0){
        return 20
      }
      const fill = Math.min((prev + prev * 0.20), 100); 
      return Math.round(fill) 
      
    })
   
  }
  const handleEmpty = () => {
    setWater((prev)=>{
      if (prev <= 20) {
        return 0;
      }
      const empty = Math.max((prev - prev * 0.20), 0)
      
      return Math.round(empty)
    });
  }

  return (
    <>
      <div className="bg-black text-white flex justify-center flex-col items-center h-screen">
        <h1 className="text-center text-white font-semibold text-2xl">
          The water level is {water}%{" "}
        </h1>
        <div className="w-[250px] h-[800px] border-4 border-white border-t-0 flex items-end mb-10 ">
          <div
            style={{ height: `${water}%` }}
            className={`w-full  bg-blue-300  transition-all duration-500 ease-in-out relative ${
              water < 100 && water > 0 ? "before:absolute" : ""
            } before:top-[-20px] before:left-0 before:w-full before:h-[50px] before:bg-blue-300 ${animatestop && "before:animate-wiggle"}`}
          ></div>
        </div>

        <div className="flex gap-[150px]">
          <p
            onClick={handleFill}
            className="bg-green-300 py-2 px-12 rounded-md text-2xl active:scale-[0.98] cursor-pointer text-black font-bold"
          >
            Fill
          </p>
          <p
            onClick={handleEmpty}
            className="bg-green-300 py-2 px-8 rounded-md text-2xl active:scale-[0.98] cursor-pointer text-black font-bold"
          >
            Empty
          </p>
        </div>
      </div>
    </>
  );
}

export default App
