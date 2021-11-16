import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import ThemeProvider from './context/ThemeProvider'

firebase.initializeApp({
  apiKey: 'AIzaSyCTdUK8ry-fIV0XP88xSy_JUUpHD-dQqt4',
  authDomain: 'chat-app-717e2.firebaseapp.com',
  projectId: 'chat-app-717e2',
  storageBucket: 'chat-app-717e2.appspot.com',
  messagingSenderId: '214754581800',
  appId: '1:214754581800:web:ddcd0111c0639b9f49c41d',
  measurementId: 'G-NXC6F14MSZ',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext<any>(null)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Context.Provider value={{ firebase, auth, firestore }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
