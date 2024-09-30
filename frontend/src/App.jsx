import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Toaster } from 'react-hot-toast'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full flex items-center justify-center'>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    <Toaster />
  </div>
  )
}

export default App
