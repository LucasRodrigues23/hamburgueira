import { useOutClick } from '../Hooks/useOutClick'
import { ModalBox, ModalWrapper } from './styles'

interface iModalProps{
    children: React.ReactNode
}

export const Modal = ({children}: iModalProps) => {
/*   const modalRef = useOutClick(() => console.log('perdemo')) */

  return (
    <ModalWrapper>
        <ModalBox  /* ref={modalRef} */>
            <div>
                <h2>Carrinho de compras</h2>
                <button onClick={() => console.log('close modal')}>X</button>
            </div>
            {children}
        </ModalBox>
    </ModalWrapper>
  )
}