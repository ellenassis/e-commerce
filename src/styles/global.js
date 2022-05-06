import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle  `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Urbanist', sans-serif;
        overflow-x: hidden;
    }

    :root {
        --principal: #2D848A;
    }
`;