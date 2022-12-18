import styled from "styled-components";

export const RegisterBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 768px){
    flex-direction: column;
    }

    & > section {
        width: 50%;
        max-width: 500px;
        padding: 20px;

        @media only screen and (max-width: 768px){
        width: 100%;
        padding: 5px;
        }
    }`