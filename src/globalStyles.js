import { createGlobalStyle } from 'styled-components';
import './fonts/stylesheet.css';

const GlobalStyle = createGlobalStyle`

:root {
    --main-green-color: #3f9c14;
    --main-text-color: #EAEAEA;
    --second-text-color: #AFAFAF;
    --main-bg-color: #181818;
    --error-color: #DF1332
}

/* 
@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Ultralight.eot');
    src: local('./fonts/Neue Machina Ultralight'), local('NeueMachina-Ultralight'),
    url('./fonts/NeueMachina-Ultralight.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Ultralight.woff2') format('woff2'),
        url('./fonts/NeueMachina-Ultralight.woff') format('woff'),  url('./fonts/NeueMachina-Ultralight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Light.eot');
    src: local('./fonts/Neue Machina Light'), local('NeueMachina-Light'),
    url('./fonts/NeueMachina-Light.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Light.woff2') format('woff2'),
        url('./fonts/NeueMachina-Light.woff') format('woff'),  url('./fonts/NeueMachina-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Black.eot');
    src: local('Neue Machina Black'), local('NeueMachina-Black'),
    url('./fonts/NeueMachina-Black.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Black.woff2') format('woff2'),
        url('./fonts/NeueMachina-Black.woff') format('woff'), url('./fonts/NeueMachina-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Regular.eot');
    src: local('Neue Machina Regular'), local('NeueMachina-Regular'),
    url('./fonts/NeueMachina-Regular.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Regular.woff2') format('woff2'),
        url('./fonts/NeueMachina-Regular.woff') format('woff'),  url('./fonts/NeueMachina-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Bold.eot');
    src: local('Neue Machina Bold'), local('NeueMachina-Bold'),
    url('./fonts/NeueMachina-Bold.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Bold.woff2') format('woff2'),
        url('./fonts/NeueMachina-Bold.woff') format('woff'),  url('./fonts/NeueMachina-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Medium.eot');
    src: local('Neue Machina Medium'), local('NeueMachina-Medium'),
    url('./fonts/NeueMachina-Medium.eot?#iefix') format('embedded-opentype'),
        url('./fonts/NeueMachina-Medium.woff2') format('woff2'),
        url('./fonts/NeueMachina-Medium.woff') format('woff'),  url('../src/fonts/NeueMachina-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Neue Machina';
     font-display: swap;
    src: url('./fonts/NeueMachina-Ultrabold.eot');
    src: local('Neue Machina Ultrabold'), local('NeueMachina-Ultrabold'),
    url('./fonts/NeueMachina-Ultrabold.eot?#iefix') format('embedded-opentype'),
         url('./fonts/NeueMachina-Ultrabold.woff2') format('woff2'),
        url('./fonts/NeueMachina-Ultrabold.woff') format('woff'),  url('./fonts/NeueMachina-Ultrabold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
} */
button,
link,
div,
li{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
    margin: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: Neue Machina;
    background: var(--main-bg-color);
    font-size: 0;
    scroll-behavior: smooth;

    cursor:
            url('./images/cursor.png') 2 2,
            pointer;
}


button {
    border: none;
    cursor: pointer;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}


/* Убираем внутренние отступы */
ul,
ol {
    padding: 0;
}

video::-webkit-media-controls {
    display: none !important;
}

/* Убираем внешние отступы */

h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
    font-size: 14px;
}

html {
    scroll-behavior: smooth;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
    list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
    max-width: 100%;
    display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
    margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
    font: inherit;
}

/* input{
  font-size: 14px;
} */
input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

a {
    text-decoration: none;
}`


export default GlobalStyle;