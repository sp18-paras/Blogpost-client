import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import Login from './components/Login'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
