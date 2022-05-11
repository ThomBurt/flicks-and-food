import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}`

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export default GlobalStyle;