import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { LOGIN_ROUTE } from '../utils/constants/constants'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '..'

interface Props {}

export const Navbar = (props: Props) => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
  return (
    <Menu
      mode="horizontal"
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      {user ? (
        <NavLink to=''>
          <Menu.Item key="app" onClick={() => auth.signOut()}>Выйти</Menu.Item>
        </NavLink>
      ) : (
        <NavLink to={LOGIN_ROUTE}>
          <Menu.Item key="mail">Войти</Menu.Item>
        </NavLink>
      )}
    </Menu>
  )
}
