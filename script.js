const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultColor = '#fff';
container.style.backgroundColor = `${defaultColor}`;

function onchangeBg() {
    container.style.backgroundColor = `${color.value}`;
}
