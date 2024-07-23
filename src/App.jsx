import { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Login")
        navigate('/')
      } else {
        console.log("logout")
        navigate('./login')
      }
    })
  }, [])
  return (
    <>
     <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  )
}

export default App
