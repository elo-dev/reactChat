import React, { useContext } from 'react'
import { AppRoute } from './components/AppRoute'
import { Navbar } from './components/Navbar/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Loader } from './components/Loader/Loader'
import { Context } from './index'
import './App.scss'

const App = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  
  if(loading){
    return <Loader />
  }

  return (
    <div className="App">
      <Navbar />
      <AppRoute />
    </div>
  )
}

export default App
