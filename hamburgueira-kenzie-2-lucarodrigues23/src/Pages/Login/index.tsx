import { FormLogin } from '../../Components/Forms/LoginForm'
import { LogoDisplay } from '../../Components/LogoDisplay'
import { LoginBox } from './styles'

export const Login = () => {
  return (
    <LoginBox>
      <section>
        <FormLogin />
      </section>
      <section>
        <LogoDisplay />
      </section>
    </LoginBox>
  )
}
