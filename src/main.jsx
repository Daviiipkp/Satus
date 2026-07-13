import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css'

import App from './App.tsx'
import Dashboard from './pages/Dashboard.tsx'

import { ClerkProvider } from '@clerk/clerk-react'
import SignIn from './pages/SignIn.tsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/dashboard",
    element: <Dashboard />,
  },{
    path: "/sign-in",
    element: <SignIn />,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
