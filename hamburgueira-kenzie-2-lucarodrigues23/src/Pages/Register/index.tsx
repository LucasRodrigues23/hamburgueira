import { FormRegister } from '../../Components/Forms/RegisterForm'
import { LogoDisplay } from '../../Components/LogoDisplay'
import { RegisterBox } from './styles'

export const Register = () => {
  return (
    <RegisterBox>
      <section>
       <LogoDisplay />
      </section>
      <section>
       <FormRegister />
      </section>
    </RegisterBox>
  )
}
