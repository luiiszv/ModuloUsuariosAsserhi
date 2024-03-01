import React from 'react'
import { Outlet } from "react-router-dom"; //Outlet es marcador de jerarkia





const LayoutAdmin = () => {
  return (
    <div>LayoutAdmin <Outlet/> </div>
  )
}

export default LayoutAdmin