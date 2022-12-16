import { Header } from '../../Components/Header'
import { Modal } from '../../Components/Modal'
import { ProductList } from '../../Components/ProductList'

export const Dashboard = () => {
  return (
    <div>
      {/* <Modal>Carro Pequeno</Modal> */}
      <Header />
      <ProductList />
    </div>
  )
}
