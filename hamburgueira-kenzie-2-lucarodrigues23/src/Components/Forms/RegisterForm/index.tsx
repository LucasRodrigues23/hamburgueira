import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import { Input } from '../Input'
import { registerSchema } from './RegisterSchema'
import { Button } from '../../Buttons'
import { FormRegisterStyled, FormRegisterTitleBox } from './styles'
import { InputPassword } from '../InputPassword'

interface iRegisterFormValues {
  name?: string
  email: string
  password: string
  confirmPassword: string
}

export const FormRegister = () => {
  const [loading, setLoading] = useState(false)
  const { userRegister } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors }, reset, } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  });
  
  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    userRegister(data, setLoading)
    reset()
  }
  return (
    <>
      <FormRegisterStyled onSubmit={handleSubmit(submit)}>
        <FormRegisterTitleBox>
          <h2>Cadastro</h2>
          <Link to={'/login'}>Retornar para o login</Link>
        </FormRegisterTitleBox>
        <Input label={'Nome'} id={'name'} type={'text'} placeholder={'Digite seu nome'} register={register('name')} disabled={loading}></Input>
        {errors.name && <p>{errors.name.message}</p>}
        <Input label={'Email'} id={'email'} type={'email'} placeholder={'Digite seu email'} register={register('email')} disabled={loading}></Input>
        {errors.email && <p>{errors.email.message}</p>}
        <InputPassword label={'Senha'} id={'password'} type={'password'} placeholder={'Digite sua senha'} register={register('password')} disabled={loading}></InputPassword>
        {errors.password && <p>{errors.password.message}</p>}
        <InputPassword label={'Repetir Senha'} id={'confirmPassword'} type={'password'} placeholder={'Repita sua senha'} register={register('confirmPassword')} disabled={loading}></InputPassword>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <Button size={'lg'} theme={'white'} type={'submit'} disabled={loading}>{!loading? 'Cadastrar' : 'Cadastrando'}</Button>
      </FormRegisterStyled>
    </>
  )
}
