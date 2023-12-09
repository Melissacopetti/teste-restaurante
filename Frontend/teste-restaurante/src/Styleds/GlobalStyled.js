import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html,
body,
#root,
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;

}

ul, li {
    list-style-type: none;
}


body {
    background-image: url('https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2022.2F05.2F20.2Ffd232c4f-3a8e-465e-97c8-59c1094e2bdb.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/1045%2C653/les-erreurs-a-ne-surtout-pas-faire-en-cuisinant-une-pizza.jpeg');
    background-position:100%;
    background-size: cover;
    background-repeat: repeat;
}

`