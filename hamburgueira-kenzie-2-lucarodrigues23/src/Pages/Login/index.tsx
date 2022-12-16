import { Form } from 'react-router-dom'
import { LogoDisplay } from '../../Components/LogoDisplay'
import { LoginBox } from './styles'

export const Login = () => {
  return (
    <LoginBox>
      <section>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat harum ipsam consequuntur temporibus doloremque nulla officiis quae, enim dignissimos, iusto accusantium debitis ducimus nisi dolor quidem illum ex sunt minima.</p>
      </section>
      <section>
        <LogoDisplay />
      </section>
    </LoginBox>
  )
}
