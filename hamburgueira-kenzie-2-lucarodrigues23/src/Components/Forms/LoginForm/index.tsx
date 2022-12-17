import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../../Buttons'
import { Input } from '../Input'
import { LoginSchema } from './loginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { UserContext } from '../../../Contexts/UserContext'

interface iLoginFormValues{
  email: string
  password: string
}

export const FormLogin = () => {

  const [loading, setLoading] = useState(false)
  const { userLogin } = useContext(UserContext)
  const {register, handleSubmit } = useForm<iLoginFormValues>({
    resolver: yupResolver(LoginSchema)
  })

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoading)
  }
  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input label={'Email'} type={'email'} id={'email'} placeholder={'Digite seu email'} register={register('email')} disabled={loading}></Input>
      <Input label={'Senha'} type={'password'} id={'password'} placeholder={'Digite sua senha'} register={register('password')}></Input>
      <Button size={'lg'} theme={'primary'} type={'submit'} disabled={false}>Logar</Button>
      <span></span>
      <Link to='/register'>Cadastrar-se</Link>
    </form>
    </>
  )
}
