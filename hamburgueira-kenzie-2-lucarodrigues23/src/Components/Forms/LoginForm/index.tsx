import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../../Buttons'
import { Input } from '../Input'
import { loginSchema } from './loginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { UserContext } from '../../../Contexts/UserContext'
import { InputPassword } from '../InputPassword'
import { FormLoginStyled } from './styles'

interface iLoginFormValues{
  email: string
  password: string
}

export const FormLogin = () => {

  const [loading, setLoading] = useState(false)
  const { userLogin } = useContext(UserContext)
  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema)
  })
  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoading)
    reset()
  }
  return (
    <>
    <FormLoginStyled onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input label={'Email'} type={'email'} id={'email'} placeholder={'Digite seu email'} register={register('email')} disabled={loading}></Input>
      {errors.email && <p>{errors.email.message}</p>}
      <InputPassword label={'Senha'} type={'password'} id={'password'} placeholder={'Digite sua senha'} register={register('password')}></InputPassword>
      {errors.password && <p>{errors.password.message}</p>}
      <Button size={'lg'} theme={'primary'} type={'submit'} disabled={false}>Logar</Button>
      <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
      <Link to='/register'>Cadastrar-se</Link>
    </FormLoginStyled>
    </>
  )
}
