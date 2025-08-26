import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addvalue = () => {
    if(counter === 20){
      return;
    }
    // counter = counter+1;
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
  }

  const decrvalue = () => {
    if(counter === 0){
      return;
    }
    counter = counter-1; 
    setCounter(counter)
  }
  return (
    <>
    <h1>chai aur code</h1>
    <h2>Counter value {counter}</h2>

    <button onClick={addvalue}>Add value {counter}</button>
    <br />
    <button onClick={decrvalue}>Decrease value {counter}</button>
    </>
  ) 
}

export default App
