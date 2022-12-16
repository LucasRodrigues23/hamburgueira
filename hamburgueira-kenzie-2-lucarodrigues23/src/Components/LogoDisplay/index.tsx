import { LogoDisplayStyled } from "./styles"
import logo from'../../Assets/logo.svg'
import { FiShoppingBag } from'react-icons/fi'

export const LogoDisplay = () => {
    return(
        <>
        <LogoDisplayStyled>
            <div>
                <img src={logo} alt="logo" />
                <div>
                    <span><FiShoppingBag /></span>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                </div>
            </div>
        </LogoDisplayStyled>
        </>
    )
}