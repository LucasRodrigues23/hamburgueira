import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Card } from './Card'
import { ProductListStyled } from './styles'

export const ProductList = () => {
    const { products } = useContext(ProductsContext)
  return (
    <>
    <ProductListStyled>
        {products.map((product, i) => <Card key={i} product={product} />)}
    </ProductListStyled>
    </>
  )
}
