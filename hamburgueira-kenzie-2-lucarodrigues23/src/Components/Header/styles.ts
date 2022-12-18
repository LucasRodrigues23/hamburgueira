import styled from "styled-components";

export const HeaderStyled = styled.div`
    width: 100%;
    background-color: var(--color-grey0);
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px 2px;

    & > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    max-width: 1500px;
    height: 80px;
    position: relative;

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
    
    & > span {
        background-color: var(--color-primary);
        border-radius: 5px;
        padding: 0px 4px;
        text-align: center;
        font-weight: 900;
        font-size: 14px;
        color: var(--color-grey0);
        position: absolute;
        right: 60px;
        top: 8px;

        @media only screen and (max-width: 768px){
            right: 60px;
            top: 55px;
        }
    }

    & > button {
        font-weight: 900;
        font-size: 28px;
        padding: 5px 10px;
        :hover{
            color: var(--color-primary);
            background-color: transparent;
            border-style: none;
        }
    }


    & > form {  
    border: 2px solid var(--color-grey1);
    border-radius: 8px;
    display: flex;
    padding: 5px;
    :focus-within {
        border: 2px solid var(--color-primary);
    }
    :hover {
        border: 2px solid var(--color-primary);  
    }

    @media only screen and (max-width: 768px){
        width: 95%;
        justify-content: space-between;
    }
    

    & > input {
    background: transparent;
    border-style: none;
    color: var(--color-grey50);
    font-weight: 400;
    font-size: 16px;
    padding-left: 10px;
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
    }}}}
`
