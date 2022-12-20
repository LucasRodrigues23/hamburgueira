import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Este campo é orbigatório')
        .min(3, 'O nome deve ter no minimo 3 caracteres')
        .max(30, 'O nome pode ter no maximo 30 caracteres'),

    email: yup
        .string()
        .required('Este campo é orbigatório')
        .email('Endereço de email invalido'),

    password: yup
        .string()
        .required('Este campo é orbigatório')
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .max(20, 'A senha pode ter no maximo 20 caracteres'),

    confirmPassword: yup
        .string()
        .required('Este campo é orbigatório')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),

})