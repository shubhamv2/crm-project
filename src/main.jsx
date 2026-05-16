import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {router} from './router/index'
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { LeadsProvider } from './context/LeadsContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LeadsProvider>

      <RouterProvider router={router}/>
      </LeadsProvider>
    </AuthProvider>
  </StrictMode>,
)
