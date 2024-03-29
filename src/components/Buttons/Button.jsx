import React from 'react'
import s from './Button.module.css'

const Button = (props) => {
    return (<button onClick={ props.fn }><span>{props.name}</span></button>)
}

export default Button

