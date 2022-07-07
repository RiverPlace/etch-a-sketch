const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const clearBtn = document.getElementById('clear');
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('color-picker');
const randomMode = document.getElementById('random-mode');
const eraserMode = document.getElementById('eraser-mode');

colorPicker.addEventListener('input', (e) => enableColorMode(e));
randomMode.addEventListener('click', enableRandomMode);
eraserMode.addEventListener('click', enableEraserMode);
clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('input', (e) => updateGridSize(e));

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function updateColor(newColor) {
    currentColor = newColor;
}

function updateGridSize(e) {
    let gridSize = document.getElementById('grid-size');
    gridSize.value = e.target.value;
    initGrid(e.target.value);
}

function enableColorMode(e) {
    currentMode = 'color';
    updateColor(e.target.value);
    updateActiveButton();
}

function enableRandomMode() {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
    }
    currentMode = 'rainbow';
    currentColor = hex;
    colorPicker.value = hex;
    updateActiveButton();
}

function enableEraserMode() {
    currentMode = 'eraser';
    updateColor('white');
    updateActiveButton();
}

function initGrid(size) {
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.classList.add('square');
        square.addEventListener('mousedown', colorGrid);
        square.addEventListener('mouseover', colorGrid);
        grid.insertAdjacentElement('beforeend', square);
    }
}

function colorGrid(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

function clearGrid() {
    let buttons = document.getElementsByClassName('square');
    for (let button of buttons) {
        button.style.backgroundColor = 'white';
    }
    currentMode = 'color';
    currentColor = colorPicker.value;
    updateActiveButton();
}

function updateActiveButton() {
    let buttons = document.getElementsByClassName('button');
    for (let button of buttons) {
        button.classList.remove('active');
    }

    if (currentMode === 'color') {
        colorPicker.classList.add('active');
    } else if (currentMode === 'rainbow') {
        randomMode.classList.add('active');
    } else if (currentMode === 'eraser') {
        eraserMode.classList.add('active');
    }
}

initGrid(16);