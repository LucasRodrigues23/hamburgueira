import { useContext } from 'react'
import { ProductsContext } from '../../../Contexts/ProductsContext'
import { iProduct } from '../../../Contexts/types'
import { Button } from '../../Buttons'
import { CardStyled } from './styles'

export interface iCardProps{
  product: iProduct
  
}

export const Card = ({product}: iCardProps) => {
  
  const { addToCart } =  useContext(ProductsContext)
  return (
    <>
    <CardStyled>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R${product.price?.toFixed(2)}</span>
        <Button size={'md'} theme={'primary'} type={'button'} onclick={(e) => addToCart(product)} disabled={false}>Adicionar</Button>
    </CardStyled>
    </>
  )
}
