import { HeaderStyled } from './styles'
import logo from'../../Assets/logo.svg'
import { FaSearch, FaShoppingCart } from'react-icons/fa'
import { FiLogOut } from'react-icons/fi'
import { Button } from '../Buttons'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
export const Header = () => {
  const { userLogout } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
      mode: 'onBlur',
      defaultValues: {
        search: ''
      },
    })
  
  const searching = (data: any) => {
    console.log(data)
  }
  return (
    <>
        <HeaderStyled>
            <img src={logo} alt="logo" />
            <div>
               <form onSubmit={handleSubmit(searching)}>
                    <input type="text" placeholder='Digitar Pesquisa' id='search' {...register('search')} />
                    <Button size={'md'} theme={'primary'} type={'submit'} disabled={false}><FaSearch /></Button>
                </form>
                <Button size={'md'} theme={'white'} type={'button'} onclick={() => console.log('Open Cart')} disabled={false}><FaShoppingCart /></Button>
                <Button size={'md'} theme={'white'} type={'button'} onclick={() => userLogout()} disabled={false}><FiLogOut /></Button> 
            </div>
        </HeaderStyled>
    </>
  )
}

