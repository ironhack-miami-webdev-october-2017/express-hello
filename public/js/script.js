// this is a frontend JavaScript file (include it in a <script> tag)

let size = 32;

const h1Tag = document.querySelector("h1");

h1Tag.onclick = () => {
    size += 1;
    h1Tag.style.fontSize = size + "px";
};
