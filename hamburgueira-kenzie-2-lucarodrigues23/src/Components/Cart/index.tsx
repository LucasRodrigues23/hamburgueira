import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Button } from '../Buttons'
import { CardCart } from './CardCart'
import { CartStyled, EmptyCart } from './styles'

export const Cart = () => {
  const {currentCart, setCurrentCart, cartTotal, setCartTotal} = useContext(ProductsContext)
  const noRepeatProductsCart = currentCart.filter((elem, i, arr) => i === arr.indexOf(elem))
  const removeAll = () =>{
    setCurrentCart([])
    setCartTotal(0)
    localStorage.removeItem('@hamburgueria-kenzie-cart:')
  }
  
  if (currentCart.length >0) {
    return (
    <>
    <CartStyled>
      <ul>
        {noRepeatProductsCart.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0).map((product, i) => <CardCart key={i} product={product} />)}
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
