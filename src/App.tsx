import React from 'react'
import { AppRoute } from './components/AppRoute'
import { Navbar } from './components/Navbar'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoute />
    </div>
  )
}

export default App
