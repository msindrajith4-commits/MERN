import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Auth from './Pages/Auth'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResource'
import AdminSettings from './Admin/Pages/AdminSettings'
import { useState } from 'react'
import Preloader from './Components/Preloader'



function App() {
  const [isLoading,setloading] = useState(true)

setTimeout(() => {
  setloading(false)
}, 3000);
 

  return (
    <>
      <Routes>
        <Route path='/' element={isLoading?<Preloader/>:<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/book' element={<Books/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth inside/>} />

        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/books/:id' element={<View/>} />

      </Routes>
    </>
  )
}

export default App
