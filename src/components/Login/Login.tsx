import React, { useContext } from 'react'
import { Button } from 'antd'
import style from './Login.module.scss'
import { Context } from '../../index'
import firebase from 'firebase/compat/app';

interface Props {}

export const Login = (props: Props) => {

    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

  return (
    <div className={style.login__container}>
      <div className={style.login__form}>
        <h2>Login</h2>
        <Button onClick={login} type='primary'>Войти с помощью Google</Button>
      </div>
    </div>
  )
}
