import styled from "styled-components";

export const ProductListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 85%;
    max-width: 1500px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px){
        overflow-y: scroll;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;   
    }

`