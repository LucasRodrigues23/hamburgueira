
import { CardCartStyled, ImgBox } from './styles'
import { FaRegTrashAlt } from'react-icons/fa'
import { iCardProps } from '../../ProductList/Card'
import { useContext } from 'react'
import { ProductsContext } from '../../../Contexts/ProductsContext'

export const CardCart = ({product}: iCardProps) => {
  const { currentCart } = useContext(ProductsContext)

  return (
    <>
    <CardCartStyled>
        <ImgBox>
            <img src={product.img} alt={product.name} />
        </ImgBox>
        <div>
            <p>{product.name}</p>
            <div>
              <button>-</button>
              <p></p>
              <button>+</button>
            </div>
        </div>
        <button><FaRegTrashAlt /></button>
    </CardCartStyled>
    </>
  )
}
