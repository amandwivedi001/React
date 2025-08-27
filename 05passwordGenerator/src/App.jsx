import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useref hook
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "{}[]!@#$%^&*()`-+_*/~"

    for (let index = 0; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword])

  const passwordCopyToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {passwordGenrator()}, [length, numberAllowed, charAllowed])
  return (
     <div className='w-full max-w-md mx-auto px-4 py-3 my-8 shadow-md rounded-lg 
     bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg
      overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 bg-slate-50'
        placeholder='Password'
        readOnly
        ref = {passwordRef}
        />
        <button className=' bg-blue-700 px-3 py-0.5 
        text-white'
        onClick={passwordCopyToclipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100} 
          onChange={(e) => 
            {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
        <input 
        type="checkbox" 
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {setnumberAllowed((prev) => !prev)}}
         />
         <label>Numbers</label>
        </div>
        <div className='flex text-sm gap-x-2'>
        <input 
        type="checkbox" 
        defaultChecked={charAllowed}
        id="numberInput"
        onChange={() => {setcharAllowed((prev) => !prev)}}
         />
         <label>Characters</label>
        </div>
      </div>
     </div>
  )
}

export default App
