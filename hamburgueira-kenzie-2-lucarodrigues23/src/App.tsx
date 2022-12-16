import { ProductsProvider } from './Contexts/ProductsContext'
import { UserProvider } from './Contexts/UserContext'
import { SampleRoutes } from './Routes/index '
import { Global } from'./Styles/GlobalStyles'

export const App = () => {
  return (
    <div className="App">
      <Global />
      <UserProvider>
      <ProductsProvider>
      <SampleRoutes />
      </ProductsProvider>
      </UserProvider>
    </div>
  )
}


