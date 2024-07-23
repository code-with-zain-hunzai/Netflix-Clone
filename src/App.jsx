import { useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Player from './pages/player/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  )
}

export default App
