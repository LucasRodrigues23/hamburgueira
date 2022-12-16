import styled from "styled-components";

export const LoginBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 768px){
    flex-direction: column-reverse;
    & > section {
        width: 95%;
    }
    }

    & > section {
        width: 50%;
        max-width: 500px;
        padding: 20px;
    }
`