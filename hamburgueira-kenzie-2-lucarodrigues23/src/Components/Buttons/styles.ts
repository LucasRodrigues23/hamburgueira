import styled, { css } from "styled-components";
interface iButtonStyledProps{
    size: 'lg' | 'md'
    theme: 'primary' | 'grey'
}
export const ButtonStyled = styled.button<iButtonStyledProps>`
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    transition: 0.5ms;

    ${({size}) => {
        switch (size) {
            case 'lg':
                return css`
                padding: 20px;
                width: 95%;
                `
            case 'md':
                return css`
                padding: 10px 20px;
                `
        }   
    }}

    ${({theme}) => {
        switch (theme) {
            case 'primary':
                return css`
                background-color: var(--color-primary);
                border: 1px solid var(--color-primary);
                color: var(--color-grey0);
                :hover{
                background-color: var(--color-primary50);
                border: 1px solid var(--color-primary50);
                }
                `
            case 'grey':
                return css`
                background-color: var(--color-grey1);
                border: 1px solid var(--color-grey1);
                color: var(--color-grey3);
                :hover{
                background-color: var(--color-grey3);
                border: 1px solid var(--color-grey3);
                color: var(--color-grey1);
                }
                `
            case 'white':
                return css`
                background-color: var(--color-grey0);
                border: 1px solid var(--color-grey0);
                color: var(--color-grey2);
                :hover{
                background-color: var(--color-primary);
                border: 1px solid var(--color-primary);
                color: var(--color-grey0);
                }
                `    
        }
    }}
        

`