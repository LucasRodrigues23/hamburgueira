import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Card } from './Card'
import { ProductListStyled } from './styles'

export const ProductList = () => {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <>
      <ProductListStyled>
        {filteredProducts.map((product, i) => <Card key={i} product={product} />)}
      </ProductListStyled>
    </>
  )
}
