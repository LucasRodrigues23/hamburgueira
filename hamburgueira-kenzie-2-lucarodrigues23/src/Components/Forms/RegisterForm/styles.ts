import styled from "styled-components";

export const FormRegisterStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    padding: 25px;  
`

export const FormRegisterTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;

    & > a {
        text-decoration-line: underline;
        font-weight: 500;
        font-size: 14px;
        color: var(--color-grey2);

        :hover {
            color: var(--color-primary);
        }
    }
`