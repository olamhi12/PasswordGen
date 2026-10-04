import React from 'react'

import { useState } from 'react'

const App = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  const generatePassword = () => {
    let chars = ''
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (numbers) chars += '0123456789'
    if (symbols) chars += '!@#$%^&*()_+-=[]{}'

    if (!chars) return setPassword('')

    const array = new Uint32Array(length)
    crypto.getRandomValues(array)
    setPassword(Array.from(array, n => chars[n % chars.length]).join(''))
  }

  const copyPassword = () => navigator.clipboard.writeText(password)

  return (
    <div className='bg-blue-300 h-screen w-full flex flex-col items-center justify-center text-black gap-4'>
        <h1 className='text-2xl font-bold'>Password Generator</h1>
        <main className='w-200 h-120 bg-blue-200 shadow-2xl rounded-2xl flex flex-col items-center gap-5 justify-center'>
            <div className='relative'>
              <input value={password} type="text" className='bg-white w-170 p-3 m-2 rounded-sm'/>
              <button onClick={copyPassword} className='cursor-pointer bg-gray-500 p-1 rounded-sm absolute right-5 top-3'>Copy</button>
            </div>
            <label className='bg-white w-180 h-10 flex justify-between p-3 rounded-sm'>
              <p>Password length</p>
              <input type="number" name="" id="" />
            </label>
            <label className='bg-white w-180 h-10 flex justify-between p-3 rounded-sm'>
              <p>Contain uppercase letter</p>
              <input type="checkbox" className='' checked={upper} onChange={e => setUpper(e.target.checked)} name="" id="" />
            </label>
            <label className='bg-white w-180 h-10 flex justify-between p-3 rounded-sm'>
              <p>Contain lowercase letter</p>
              <input type="checkbox" checked={lower} onChange={e => setLower(e.target.checked)} name="" id="" />
            </label>
            <label className='bg-white w-180 h-10 flex justify-between p-3 rounded-sm'>
              <p>Contain numbers</p>
              <input type="checkbox" checked={numbers} onChange={e => setNumbers(e.target.checked)} name="" id="" />
            </label>
            <label className='bg-white w-180 h-10 flex justify-between p-3 rounded-sm'>
              <p>Contain symbol</p>
              <input type="checkbox" checked={symbols} onChange={e => setSymbols(e.target.checked)} name="" id="" />
            </label>
            <button onClick={generatePassword} className='bg-gray-500 w-180 h-10 rounded-sm cursor-pointer'>Generate Password</button>
        </main>
    </div>
  )
}

export default App
