import { useState } from 'react'
import { Cart } from '../../Components/Cart'
import { Header } from '../../Components/Header'
import { Modal } from '../../Components/Modal'
import { ProductList } from '../../Components/ProductList'
import { DashoboardStyled } from './styles'

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)
  return (

    <DashoboardStyled>
      {showModal && <Modal setShowModal={setShowModal}>{<Cart />}</Modal>}
      <Header setShowModal={setShowModal} />
      <ProductList />
    </DashoboardStyled>
  )
}
