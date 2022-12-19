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

    -webkit-animation: scale-up-ver-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-ver-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

            @-webkit-keyframes scale-up-ver-top {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
}
@keyframes scale-up-ver-top {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
}

`