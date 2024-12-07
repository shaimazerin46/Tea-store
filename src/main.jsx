import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, UNSAFE_ServerMode } from 'react-router-dom'
import AllTea from './components/AllTea.jsx'
import AddTea from './components/AddTea.jsx'
import Update from './components/Update.jsx'
import Signin from './components/Signin.jsx'
import SignUp from './components/signUp.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App></App>
    },
    {
      path: '/allTea',
      element: <AllTea></AllTea>,
      loader: ()=> fetch('http://localhost:5000/teas')
    },
    {
      path: '/addTea',
      element: <AddTea></AddTea>
    },
    {
      path: '/update/:id',
      element: <Update></Update>
    },
    {
      path: '/signin',
      element: <Signin></Signin>
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/users',
      element: <Users></Users>,
      loader: ()=> fetch('http://localhost:5000/users')
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
