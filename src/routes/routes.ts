import { Chat } from '../components/Chat/Chat'
import { Login } from '../components/Login/Login'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants/constants'
import { RouteProps } from 'react-router'

type consts = {
  path: RouteProps['path']
  Element: RouteProps['children']
}

export const publicRoutes: consts[] = [
  {
    path: LOGIN_ROUTE,
    Element: Login,
  },
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Element: Chat,
  },
]
