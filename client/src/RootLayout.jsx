import React from 'react'
import {Outlet} from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <div style={{minHeight:"100vh"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout