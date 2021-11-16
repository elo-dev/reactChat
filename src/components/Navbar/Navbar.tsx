import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { LOGIN_ROUTE } from '../../utils/constants/constants'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../..'

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
          <Menu.Item key='SignOut' onClick={() => auth.signOut()}>
            <NavLink to="">
              Выйти
            </NavLink>
          </Menu.Item>
      ) : (
          <Menu.Item key='SignIn'>
            <NavLink to={LOGIN_ROUTE}>
              Войти
            </NavLink>
          </Menu.Item>
      )}
    </Menu>
  )
}
