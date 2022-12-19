import styled from "styled-components";

export const FormLoginStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    padding: 25px;
            
        & > h2 {
            width: 95;
            text-align: left;
        }

        & > span{
            width: 60%;
            color: var(--color-grey2);
            font-weight: 400;
            font-size: 14px;
            text-align: center;        
        }

        & > a {
            width: 95%;
            background-color: var(--color-grey1);
            text-decoration: none;
            color: var(--color-grey2);
            padding: 20px;
            text-align: center;
            font-weight: 600;
            font-size: 16px;
        }

        & > p {
        color: var(--color-secondary);
        font-size: 12px;
        font-weight: 600;
    }
        
`