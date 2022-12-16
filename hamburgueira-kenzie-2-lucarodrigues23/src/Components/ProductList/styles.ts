import styled from "styled-components";

export const ProductListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;

    @media only screen and (max-width: 768px){
        overflow: scroll;
        flex-direction: row;
        flex-wrap: nowrap;   
    }

`