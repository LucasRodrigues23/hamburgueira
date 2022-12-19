import styled from "styled-components";

export const LoginBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 768px){
    flex-direction: column-reverse;
    }

    & > section {
        width: 50%;
        max-width: 500px;
        padding: 20px;

        @media only screen and (max-width: 768px){
        width: 100%;
        padding: 5px;
        }
    }
    -webkit-animation: scale-up-hor-center 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-hor-center 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;


    @-webkit-keyframes scale-up-hor-center {
        0% {
            -webkit-transform: scaleX(0.4);
                    transform: scaleX(0.4);
        }
         100% {
         -webkit-transform: scaleX(1);
                 transform: scaleX(1);
         }
        }
    @keyframes scale-up-hor-center {
         0% {
         -webkit-transform: scaleX(0.4);
                    transform: scaleX(0.4);
         }
         100% {
          -webkit-transform: scaleX(1);
                  transform: scaleX(1);
         }
        }

`