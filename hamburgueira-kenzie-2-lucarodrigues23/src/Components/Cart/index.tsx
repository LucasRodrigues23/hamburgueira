import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Button } from '../Buttons'
import { CardCart } from './CardCart'
import { CartStyled, EmptyCart } from './styles'

export const Cart = () => {
  const {currentCart, setCurrentCart, cartTotal, setCartTotal} = useContext(ProductsContext)

  const removeAll = () =>{
    setCurrentCart([])
    setCartTotal(0)
  }
  if (currentCart.length >0) {
    return (
    <>
    <CartStyled>
      <ul>
        {currentCart.map((product, i) => <CardCart key={i} product={product} />)}
      </ul>
      <div>
        <div>
          <p>Total</p>
          <span>R${cartTotal.toFixed(2)}</span>
        </div>
        <Button size={'lg'} theme={'grey'} type={'button'} onclick={() => removeAll()} disabled={false}>Remover Tudo</Button>
      </div>
    </CartStyled>
    </>
  )
  } else {
    return (
    <>
    <EmptyCart><h2>Você ainda não adiconou nada ao carrinho :(</h2></EmptyCart>
    
    </>
    )
    
  }
  
}
