import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import Sidebar from '../Componets/Sidebar'
import { router } from '../Router'
import './Default.css'
const Default = () => {
  return (
    <div className='layout'>
  <Sidebar/>
  <div className='content'>
  <Outlet/>
   
  </div>
    </div>
  )
}

export default Default
