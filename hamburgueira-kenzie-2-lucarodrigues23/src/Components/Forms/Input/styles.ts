import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    background-color: white;
    border: 2px solid var(--color-grey1);
    border-radius: 4px;
    position: relative;
    
    :focus-within {
        border: 2px solid var(--color-primary);
        & > label {
            color: var(--color-primary);
        }
    }
    :hover {
        border: 2px solid var(--color-primary);

        & > label {
            color: var(--color-primary);
        }
    }

    & > label{
        margin-left: 10px;
        border-style: none;
        color: var(--color-grey2);
        padding: 0px 5px;
        background-color: white;
        align-self: start;
        position: absolute;
        width: max-content;
        top: -10px;
    }

    & > input{
        width: 100%;
        padding: 15px;
        border-style: none;
        outline-style: none;
        border-radius: 5px;
        border-style: none;
        outline-style: none;
        ::placeholder {
            color: var(--color-grey1);
        }
    }


`