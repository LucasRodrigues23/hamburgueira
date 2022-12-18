import { useOutClick } from '../../Hooks/useOutClick'
import { ModalBox, ModalTitle, ModalWrapper } from './styles'

interface iModalProps{
    children: React.ReactNode
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children, setShowModal}: iModalProps) => {
 const modalRef = useOutClick(() => setShowModal(false))

  return (
    <ModalWrapper>
        <ModalBox  ref={modalRef}>
            <ModalTitle>
                <h2>Carrinho de compras</h2>
                <button onClick={() => setShowModal(false)}>X</button>
            </ModalTitle>
            {children}
        </ModalBox>
    </ModalWrapper>
  )
}