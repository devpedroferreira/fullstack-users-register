import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Home from './pages/home/index.jsx'
// importe o routeProvider
import { RouterProvider } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles.js'

import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GlobalStyles/>
      
      
      <RouterProvider router={router} />
    
    
  </StrictMode>,
)
