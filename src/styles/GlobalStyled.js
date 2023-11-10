import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #0C1015;
  }

  ::-webkit-scrollbar {
    width: 5px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #873EFF; 
    border-radius: 6px; 
  }

  ::-webkit-scrollbar-track {
    background-color: #0D1117;
  }
`