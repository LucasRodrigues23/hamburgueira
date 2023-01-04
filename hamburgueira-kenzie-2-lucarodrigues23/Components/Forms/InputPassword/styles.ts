import styled from "styled-components";

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    border-bottom: 3px solid var(--color-grey300);
    outline-style: none;

    :focus-within {
        border-bottom: 3px solid var(--color-primary);
        outline-style: none;

        & > label {
            color: var(--color-primary);
        }
    }
    :hover {
        border-bottom: 3px solid var(--color-primary);

        & > label {
            color: var(--color-primary);
        }
    }

    
    & > label{
        margin-left: 10px;
        border-style: none;
        color: var(--color-grey300);
        padding: 0px 2px;
        align-self: start;
        width: max-content;
        top: -10px;
    }
    & > div{
        display: flex;
        justify-content: space-between;
        width: 100%;

    & > input {
        width: 100%;
        padding: 10px;
        border-style: none;
        outline-style: none;
        border-radius: 5px;
        border-style: none;
        ::placeholder {
            color: var(--color-grey300);
        }
    }

    & > button {
    background-color: transparent;
    border-style: none;
    color: var(--color-grey300);
    margin-right: 10px;

    :hover {
        color: var(--color-primary);
    }}
}
`