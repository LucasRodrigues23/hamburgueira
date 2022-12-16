import React, { useContext } from 'react'
import { Card } from '../../Components/Card'
import { ProductsContext } from '../../Contexts/ProductsContext'

export const Dashboard = () => {
  const { products } = useContext(ProductsContext)
  
  return (
    <div>
      <ul>
        {products.map((product) => <Card product={product} />)}
      </ul>
    </div>
  )
}
