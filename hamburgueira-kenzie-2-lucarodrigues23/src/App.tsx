import { toast, ToastContainer } from 'react-toastify'
import { ProductsProvider } from './Contexts/ProductsContext'
import { SampleRoutes } from './Routes/index '
import { Global } from'./Styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className="App">
      <Global />
      <ProductsProvider>
      <SampleRoutes />
      </ProductsProvider>
      <ToastContainer limit={2} autoClose={500} position="bottom-right"/>
    </div>
  )
}


