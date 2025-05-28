import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
       list-style-type: none;
       list-style: none;
       text-decoration: none;
   }
   #root{
       margin:0 auto;
   }
`

export default GlobalStyle