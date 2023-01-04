import styled from 'styled-components';

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 95%;
    background-color: transparent;
    border-bottom: 2px solid var(--color-grey1);
    border-radius: 4px;
    position: relative;

    & > label{
        margin-left: 10px;
        border-style: none;
        color: var(--color-grey2);
        padding: 0px 5px;
        background-color: white;
        position: absolute;
        width: max-content;
        top: -10px;
    }

    :focus-within {
        border-bottom: 2px solid var(--color-primary);

        & > label {
            color: var(--color-primary);
        }

        & > button {
            color: var(--color-primary);
        }
    }

    :hover {
        border-bottom: 2px solid var(--color-primary);

        & > label {
            color: var(--color-primary);
        }
    }
`


export const InputPwd = styled.input`
    padding: 16px 16px;
    background-color: transparent;
    border-style: none;
    outline-style: none;
    color: var(--color-grey3);

    ::placeholder {
        color: var(--color-grey1);
        font-weight: 400;
        font-size: 16px;
    }
`

export const PwdButton = styled.button`
    background-color: transparent;
    border-style: none;
    color: var(--color-grey2);
    margin-right: 10px;

    :hover {
        color: var(--color-primary);
    }
`