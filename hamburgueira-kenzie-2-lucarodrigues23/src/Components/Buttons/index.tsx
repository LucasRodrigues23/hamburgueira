import { ButtonStyled } from './styles'

interface ibuttonprops{
  size: 'lg' | 'md'
  theme: 'primary' | 'grey'
  type: 'button' | 'submit'
  onclick: React.MouseEventHandler<HTMLButtonElement>
  children: string
  disabled: boolean
}

export const Button = ({size, theme, type, onclick, children, disabled}: ibuttonprops) => {

  return (
    <>
    <ButtonStyled size={size} theme={theme} type={type} onClick={onclick} disabled={disabled}>{children}</ButtonStyled>
    </>
  )
}
