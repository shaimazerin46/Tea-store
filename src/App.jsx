import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Link } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider'

function App() {
// const {} = useContext(AuthContext)


  return (
    <>
    
      <h2 className='text-xl font-bold mb-5'>This is Tea store</h2>
     <ul>
      <li>
      <Link to='/allTea' className='text-sm text-blue-500'>
      All of our tea
      </Link>
      
      </li>
      <li>
      <Link to='/addTea' className='text-sm text-blue-500'>
      Add tea
      </Link>
      </li>

      <li>
      <Link to='/signup' className='text-sm text-blue-500'>
     Resistration
      </Link>
      </li>
      <li>
      <Link to='/signin' className='text-sm text-blue-500'>
      Login
      </Link>
      </li>

      <li>
      <Link to='/users' className='text-sm text-blue-500'>
      Users Info
      </Link>
      </li>
     </ul>
    </>
  )
}

export default App
