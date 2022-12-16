import styled from "styled-components";

export const InputStyled = styled.div`
    width: 95%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > label{
        margin-left: 10px;
        border-style: none;
        color: var(--color-grey2);
    }

    & > input{
        width: 100%;
        padding: 15px;
        border-style: none;
        outline-style: none;
        border-radius: 5px;
        border: 2px solid var(--color-grey1);
        ::placeholder {
            color: var(--color-grey2);
        }
        :focus {
            outline: 2px solid var(--color-grey3);
        }
    }


`