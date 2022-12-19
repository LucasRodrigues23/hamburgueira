import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email('Email Invalido!')
    .required('O email é orbigatório'),

    password: yup
    .string()
    .required('A senha é obrigatória')  
})