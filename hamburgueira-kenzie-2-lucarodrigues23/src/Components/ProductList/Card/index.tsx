import { Button } from '../../Buttons'
import { CardStyled } from './styles'

interface iCardProps{
    product: {
    id?: number
    name?: string
    category?: string
    price?: number
    img?: string
  }
}
export const Card = ({product}: iCardProps) => {
  
  return (
    <>
    <CardStyled>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R${product.price?.toFixed(2)}</span>
        <Button size={'md'} theme={'primary'} type={'button'} onclick={(e) => console.log(e)} disabled={false}>Adicionar</Button>
    </CardStyled>
    </>
  )
}
