import styled from "styled-components";

export const CardCartStyled = styled.li`
width: 95%;
height: 80px;
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 10px;

& > p {
font-weight: 700;
font-size: 14px;
color: #333333;
}

& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    & > p {
        font-size: 16px;
        font-weight: 600;
        color: var(--color-grey-3);
    }

    & > div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    gap: 10px;

    & > button {
        width: 30px;
        height: 30px;
        background-color: var(--color-grey1);
        color: var(--color-secondary);
        border-style: none;
        font-weight: 400;
        font-size: 22px;
        text-align: center;
    }
    & > p {
        color: var(--color-grey-3);
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        text-justify: auto;
    }}
}

& > button{
font-weight: 500;
font-size: 12px;
color: #BDBDBD;
background-color: transparent;
border-style: none;
}
`

export const ImgBox = styled.div`
width: 80px;
height: 80px;
background: #E0E0E0;
border-radius: 5px;

& > img{
width: 80px;
height: 80px;
object-fit: cover;
}
`