import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Order from './pages/Order/Order.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

    // const url = "https://dessertplace-backend-1.onrender.com";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add'element={<Add url="https://dessertplace-backend-1.onrender.com"/>}/>
          <Route path='/list'element={<List url="https://dessertplace-backend-1.onrender.com"/>}/>
          <Route path='/orders' element={<Order url="https://dessertplace-backend-1.onrender.com"/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
