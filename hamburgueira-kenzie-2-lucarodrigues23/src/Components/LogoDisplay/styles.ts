import styled from "styled-components";

export const LogoDisplayStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        & > img {
            width: 250px;
            object-fit: cover;
        }
        & > div {
            width: 100%;
            display: flex;
            gap: 25px;
            padding: 25px;
            box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            align-items: center;
            & > span {
                color: var(--color-primary);
                background: rgba(39, 174, 96, 0.1);
                border-radius: 5px;
                padding: 10px;
            }
            & >p {
                font-weight: 400;
                font-size: 14px;
                color: var(--color-grey2);
                word-break: break-all;
                & > span {
                    font-weight: 700;
                    color: var(--color-grey3);
                }
            }
        }
    }
`