import React, { useContext, useState } from 'react'
import { Avatar, Button, Col, Input, Row } from 'antd'
import style from './Chat.module.scss'
import { Context } from '../..'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import { Loader } from '../Loader/Loader'
import classNames from 'classnames'

export const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const sendMessage = () => {
    if (value) {
      firestore.collection('messages').add({
        uid: user?.uid,
        displayName: user?.displayName,
        photoUrl: user?.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setError(false)
      setValue('')
    } else {
      setError(true)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={style.chat__container}>
      <h1 className={style.chat__title}>Chat</h1>
      <div className={style.chat}>
        <div className={style.chat__boxWrapper}>
          {messages?.map((message, index) => (
            <Row key={index} className={style.row}>
              <Col span={24}>
                <div className={style.chat__person}>
                  <Avatar src={message.photoUrl} size={42} />
                  <p className={style.person__name}>{message.displayName}</p>
                </div>
                <p
                  className={classNames(
                    style.chat__text,
                    user?.uid === message.uid
                      ? style.chat__text
                      : style.chat__interlocutor
                  )}
                >
                  {message.text}
                </p>
              </Col>
            </Row>
          ))}
        </div>
        <div className={style.chat__input}>
          <Input
            placeholder="Введите сообщение"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={error ? style.emptyInput : undefined}
            onKeyPress={() => setError(false)}
          />
          <Button onClick={sendMessage} type="primary">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  )
}
