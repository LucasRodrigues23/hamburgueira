import { HeaderStyled } from './styles'
import logo from'../../Assets/logo.svg'
import { FaSearch, FaShoppingCart } from'react-icons/fa'
import { FiLogOut } from'react-icons/fi'
import { Button } from '../Buttons'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { ProductsContext } from '../../Contexts/ProductsContext'

interface iHeaderProps{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({setShowModal}: iHeaderProps) => {
  const { userLogout } = useContext(UserContext)
  const { currentCart, searching } = useContext(ProductsContext)
  const { register, handleSubmit } = useForm({
      mode: 'onBlur',
      defaultValues: {
        search: ''
      },
    })
  const submit = (data: any) => {
    searching(data.search)
  } 
  return (
    <>
        <HeaderStyled>
          <div>
            <img src={logo} alt="logo" />
            <div>
               <form onKeyUp={handleSubmit(submit)}>
                    <input type="text" placeholder='Digitar Pesquisa' id='search' {...register('search')} />
                    <Button size={'md'} theme={'primary'} type={'button'} disabled={false}><FaSearch /></Button>
                </form>
                <span>{currentCart.length}</span>
                <Button size={'md'} theme={'white'} type={'button'} onclick={() => setShowModal(true)} disabled={false}><FaShoppingCart /></Button>
                <Button size={'md'} theme={'white'} type={'button'} onclick={() => userLogout()} disabled={false}><FiLogOut /></Button> 
            </div>
            </div>
        </HeaderStyled>
    </>
  )
}

