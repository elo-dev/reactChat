import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants/constants'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '..'

export const AppRoute = () => {
  const navigate = useNavigate()
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  useEffect(() => {
      if(user){
        navigate(CHAT_ROUTE)
      }else{
        navigate(LOGIN_ROUTE)
      }
  }, [user, navigate])

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Element }: any, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Element }: any, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
