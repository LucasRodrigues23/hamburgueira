import { InputStyled } from './styles'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface iInputProps {
  label: string
  id: string
  type: 'text' | 'password' | 'email'
  placeholder: string
  register?: UseFormRegisterReturn
  disabled?: boolean
  error?: FieldError
}

export const Input = ({ label, id, type, placeholder, register, disabled, error }: iInputProps) => {
  return (
    <>
      <InputStyled>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder} {...register} disabled={disabled} />
        {error && <span>{error.message}</span>}
      </InputStyled>
    </>
  )
}
