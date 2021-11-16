import React from 'react'
import { Spin } from 'antd'
import style from './Loader.module.scss'

interface Props {
    
}

export const Loader = (props: Props) => {
    return (
        <div className={style.loader__container}>
            <Spin size='large' />
        </div>
    )
}
