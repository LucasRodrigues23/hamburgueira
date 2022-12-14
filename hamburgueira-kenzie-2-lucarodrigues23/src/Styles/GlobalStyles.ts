import { createGlobalStyle } from 'styled-components'

export const Global =  createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-primary: #27AE60;
  --color-primary50: #93D7AF;
  --color-secondary: #EB5757;
  --color-grey3: #333333;
  --color-grey2: #828282;
  --color-grey1: #E0E0E0;
  --color-grey0: #F5F5F5;
  --color-negative: #E60000;   
  --color-warning: #FFCD07;
  --color-succes: #168821;
  --color-information: #155BCB;   
}
body,html{
    width: 100vw;
    height: 100vh;
}
body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

button {
    cursor: pointer;
}
ul, ol, li{
    list-style: none;
}
`