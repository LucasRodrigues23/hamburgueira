import { ProductsProvider } from './Contexts/ProductsContext'
import { SampleRoutes } from './Routes/index '
import { Global } from'./Styles/GlobalStyles'

export const App = () => {
  return (
    <div className="App">
      <Global />
      <ProductsProvider>
      <SampleRoutes />
      </ProductsProvider>
    </div>
  )
}


