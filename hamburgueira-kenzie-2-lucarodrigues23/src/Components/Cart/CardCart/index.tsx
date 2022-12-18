
import { CardCartStyled, ImgBox } from './styles'
import { FaRegTrashAlt } from'react-icons/fa'
import { iCardProps } from '../../ProductList/Card'
import { useContext } from 'react'
import { ProductsContext } from '../../../Contexts/ProductsContext'

export const CardCart = ({product}: iCardProps) => {
  const { currentCart, removeCartProduct, addToCart, subProductCart } = useContext(ProductsContext)

  return (
    <>
    <CardCartStyled>
        <ImgBox>
            <img src={product.img} alt={product.name} />
        </ImgBox>
        <div>
            <p>{product.name}</p>
            <div>
              <button type='button' onClick={() => subProductCart(product)}>-</button>
              <p>{currentCart.filter(elem => elem.name === product.name).length}</p>
              <button type='button' onClick={() => addToCart(product)}>+</button>
            </div>
        </div>
        <button type='button' onClick={() =>removeCartProduct(product)}><FaRegTrashAlt /></button>
    </CardCartStyled>
    </>
  )
}
