import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Switch } from 'antd'
import 'antd/dist/antd.css'
import { LOGIN_ROUTE } from '../../utils/constants/constants'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../..'
import { DARK_THEME, LIGHT_THEME, useTheme } from '../../context/ThemeProvider'
import { storage } from '../../services/storage'

interface Props {}

export const Navbar = (props: Props) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const isTheme = useTheme()

  const [checkedTheme, setCheckedTheme] = useState(storage.getItem('checkedTheme') || false)

  storage.setItem('checkedTheme', checkedTheme)

  const handlerTheme = () => {
    if(isTheme.theme === LIGHT_THEME){
      isTheme.changeTheme(DARK_THEME)
      setCheckedTheme(true)
    }else if(isTheme.theme === DARK_THEME){
      isTheme.changeTheme(LIGHT_THEME)
      setCheckedTheme(false)
    }
  }

  return (
    <Menu
      mode="horizontal"
      style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'var(--theme-default-background)'}}
    >
      {user ? (
          <Menu.Item key='SignOut' onClick={() => auth.signOut()}>
            <NavLink to="" style={{ color: 'var(--theme-default-header)'}} >
              Выйти
            </NavLink>
          </Menu.Item>
      ) : (
          <Menu.Item key='SignIn'>
            <NavLink to={LOGIN_ROUTE} style={{ color: 'var(--theme-default-header)' }}>
              Войти
            </NavLink>
          </Menu.Item>
      )}
      <Menu.Item>
        <Switch defaultChecked={checkedTheme} onChange={handlerTheme} />
      </Menu.Item>
    </Menu>
  )
}
