import styled from "styled-components";

export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: var(--color-grey0);
    width: 90%;

    & > ul {
        width: 100%;
        padding-bottom: 10px;
        max-height: 250px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    & > div {
        border-top: 2px solid var(--color-primary);
        width: 100%;
        
        & > div {
            margin-top: 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > p{
                font-weight: 600;
                font-size: 14px;
                color: var(--color-grey3);
            }

            & > span{
                font-weight: 600;
                font-size: 14px;
                color: var(--color-primary);
            }
        }

        & > button {
            width: 100%;
            margin: 10px 0 10px 0;

            :hover {
                background-color: var(--color-secondary);
                border: 1px solid var(--color-secondary);
        }
    }}
`

export const EmptyCart = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;

    & > h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-grey3);
    }
`