import React from 'react'
import { FormRegister } from '../../Components/Forms/RegisterForm'
import { LogoDisplay } from '../../Components/LogoDisplay'
import { LoginBox } from '../Login/styles'

export const Register = () => {
  return (
    <LoginBox>
      <section>
       <FormRegister />
      </section>
      <section>
        <LogoDisplay />
      </section>
    </LoginBox>
  )
}
