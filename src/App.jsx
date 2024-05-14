import { useState } from 'react'
import './App.css'
import AddTask from './component/AddTask'
import ShowTask from './component/ShowTask'

function App() {
  const [task, settask] = useState([])

  return (
    <>
    <AddTask/>
    </>
  )
}

export default App
