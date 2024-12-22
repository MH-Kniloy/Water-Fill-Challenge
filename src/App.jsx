import { useState } from 'react';
import './App.css'

function App() {
  const [water, setWater] = useState(0)
  console.log(water)
  const handleFill = () => {
    setWater(water+2)
    if(water >=10){
      setWater(10)
    }

  }
  const handleEmpty = () => {
    setWater(water - 2);
    if (water <= 0) {
      setWater(0);
    }
  }

  return (
    <>
      <div className="bg-black text-white flex justify-center flex-col items-center h-screen">
      <h1 className='text-center text-white font-semibold text-2xl'>The water level is {water? water*10:water}% </h1>
        <div className="w-[250px] h-[800px] border-4 border-white rounded-b-full border-t-0 flex items-end mb-10 ">
          <div className={`w-full h-[${water}0%] bg-blue-300 rounded-b-full transition-all duration-500 ease-in-out`}></div>
        </div>

        <div className='flex gap-[150px]'>

        <p onClick={handleFill} className="bg-green-300 py-2 px-12 rounded-md text-2xl active:scale-[0.98] cursor-pointer text-black font-bold">
          Fill
        </p>
        <p onClick={handleEmpty} className="bg-green-300 py-2 px-8 rounded-md text-2xl active:scale-[0.98] cursor-pointer text-black font-bold">
          Empty
        </p>
        </div>
      </div>
    </>
  );
}

export default App
