import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import { Input } from '../Input'
import { RegisterSchema } from './RegisterSchema'
import { Button } from '../../Buttons'
import { FormRegisterStyled, FormRegisterTitleBox } from './styles'
import { InputPassword } from '../InputPassword'

interface iRegisterFormValues{
    name?: string
    email: string
    password: string
    confirmPassword: string
}

export const FormRegister = () => {
    const [loading, setLoading] = useState(false)
    const { userRegister } = useContext(UserContext)

    const {register, handleSubmit } = useForm<iRegisterFormValues>({
        resolver: yupResolver(RegisterSchema)
      })

    const submit: SubmitHandler<iRegisterFormValues> = (data) => {
        userRegister(data, setLoading)
    }  
  return (
    <>
    <FormRegisterStyled onSubmit={handleSubmit(submit)}>
        <FormRegisterTitleBox>
            <h2>Cadastro</h2>
            <Link to={'/login'}>Retornar para o login</Link>
        </FormRegisterTitleBox>
        <Input label={'Nome'} id={'name'} type={'text'} placeholder={'Digite seu nome'} register={register('name')} disabled={loading}></Input>

        <Input label={'Email'} id={'email'} type={'email'} placeholder={'Digite seu email'} register={register('email')} disabled={loading}></Input>
        
        <InputPassword label={'Senha'} id={'password'} type={'password'} placeholder={'Digite sua senha'} register={register('password')} disabled={loading}></InputPassword>
        
        <InputPassword label={'Repetir Senha'} id={'confirmPassword'} type={'password'} placeholder={'Repita sua senha'} register={register('confirmPassword')} disabled={loading}></InputPassword>
        <Button size={'lg'} theme={'white'} type={'submit'} disabled={!loading}>Cadastrar</Button>
    </FormRegisterStyled>
    </>
  )
}
