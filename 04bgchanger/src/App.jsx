import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg" onClick={()=> setColor('red')}>
        red
      </button>
      <button className="outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg" onClick={() => setColor('green')}>
        green
      </button>
      <button className="outline-none px-4 py-1 bg-yellow-500 rounded-full text-white shadow-lg" onClick={()=> setColor('yellow')}>
        yellow
      </button>
      <button className="outline-none px-4 py-1 bg-blue-500 rounded-full text-white shadow-lg" onClick={()=> setColor('blue')}>
        blue
      </button>
      <button className="outline-none px-4 py-1 bg-black rounded-full text-white shadow-lg" onClick={() => setColor('black')}>
        black
      </button>
      <button className="outline-none px-4 py-1 bg-orange-500 rounded-full text-white shadow-lg" onClick={() => setColor('orange')}>
        orange
      </button>
      <button className="outline-none px-4 py-1 bg-teal-500 rounded-full text-white shadow-lg" onClick={() => setColor('teal')}>
        teal
      </button>
    </div>
  </div>
</div>
  )
}

export default App
