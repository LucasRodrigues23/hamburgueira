import { useState } from 'react'

import { InputPwd, PasswordBox, PwdButton } from './styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface iInputPasswordtProps{
    label: string
    id: string
    type: 'password' 
    placeholder: string
    register?: any
    disabled?: boolean
}

export const InputPassword = ({disabled, label, id, placeholder, register}: iInputPasswordtProps) => {

    const [visible, setVisible] = useState(false)

  return (

    <>
       <PasswordBox>
        <label>{label}</label>
       <InputPwd id={id} type={visible ? 'text': 'password'} placeholder={placeholder} {...register} disabled={disabled}></InputPwd>
       <PwdButton type='button' onClick={() => setVisible(!visible)}>{visible ? <FaEyeSlash />: <FaEye />}</PwdButton> 
       </PasswordBox> 
    </>

  )} 