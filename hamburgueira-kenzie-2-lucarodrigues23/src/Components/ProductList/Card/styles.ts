import styled from "styled-components";

export const CardStyled = styled.li`
    width: 300px;
    min-width: 250px;
    height: 348px;
    background: var(--color-grey0);
    border: 2px solid var(--color-grey1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;

    :hover {
        border: 2px solid var(--color-grey3);

        & > button {
            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            color: var(--color-grey0);
            :hover{
            background-color: var(--color-primary50);
            border: 1px solid var(--color-primary50);
            }
        }
    }
    & > div {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px 5px 0 0;
        background: #F5F5F5 ;

        & > img {
            object-fit: cover;
        }
    }

    & > h3{
        font-weight: 700;
        font-size: 18px;
        color: var(--color-grey3);
        padding-left: 22px;
    }

    & > p {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey2);
        padding-left: 22px;
    }

    & > span {
        font-weight: 600;
        font-size: 14px;
        color: var(--color-primary);
        padding-left: 22px;
    }

    & > button {
        background-color: var(--color-grey1);
        border: 1px solid var(--color-grey1);
        color: var(--color-grey0);
        margin-left: 22px   
    }
`