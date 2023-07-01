import { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <AcUnitIcon />
      </h1>
    </>
  )
}

export default App
