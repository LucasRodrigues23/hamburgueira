import React from 'react'
import { InputStyled } from './styles'

interface iInputProps {
  label: string
  id: string
  type: 'text' | 'password' | 'email'
  placeholder: string
  register?: any
  disabled?: boolean
}

export const Input = ({ label, id, type, placeholder, register, disabled }: iInputProps) => {
  return (
    <>
      <InputStyled>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder} {...register} disabled={disabled} />
      </InputStyled>
    </>
  )
}
