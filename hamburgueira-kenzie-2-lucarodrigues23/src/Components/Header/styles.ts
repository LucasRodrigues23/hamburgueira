import styled from "styled-components";

export const HeaderStyled = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    max-width: 1500px;
    height: 80px;

    @media only screen and (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        width: 95%;
        height: 139px;
        gap: 10px;
    }


    & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & > form {  
    border: 2px solid var(--color-grey1);
    border-radius: 8px;
    display: flex;
    padding: 5px;
    :focus-within {
        border: 2px solid var(--color-grey3);
    }

    @media only screen and (max-width: 768px){
        width: 95%;
        justify-content: space-between;
    }
    

    & > input {
    background: #FFFFFF;
    border-style: none;
    color: var(--color-grey50);
    font-weight: 400;
    font-size: 16px;
    :focus{
        outline-style: none;
    }

    @media only screen and (max-width: 768px){
        width: 50%;
    }

    ::placeholder {
        color: #E0E0E0;
    }
    }

    & > button {
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-weight: 600        ;
        font-size: 14px;
        color: #FFFFFF;
        padding: 11.5px 20px;
        &:hover {
            background: #93D7AF;
            border: 2px solid #93D7AF;
        }
    }}}
`
