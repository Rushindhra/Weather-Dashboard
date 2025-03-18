import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.jsx'
import About from './Components/About.jsx'
import RootLayout from './RootLayout.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const browserRouterObj=createBrowserRouter([
  {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<App/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouterObj} />
  </StrictMode>,
)
