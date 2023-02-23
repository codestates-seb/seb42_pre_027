import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
        min-height: 200px;
        margin-bottom: 20px;
}
    
`;

export default GlobalStyle;
