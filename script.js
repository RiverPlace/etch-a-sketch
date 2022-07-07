const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = '#444';
const DEFAULT_SIZE = 16;

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const clearBtn = document.getElementById('clear');
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('color-picker');
const colorMode = document.getElementById('color-mode');
const rainbowMode = document.getElementById('rainbow-mode');
const eraserMode = document.getElementById('eraser-mode');

colorPicker.addEventListener('input', (e) => updateColor(e.target.value));
colorMode.addEventListener('click', enableColorMode);
rainbowMode.addEventListener('click', () => currentMode = 'rainbow');
eraserMode.addEventListener('click', enableErasermode);
clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('input', (e) => updateGridSize(e));

function updateColor(newColor) {
    currentColor = newColor;
}

function updateGridSize(e) {
    let gridSize = document.getElementById('grid-size');
    gridSize.value = e.target.value;
    initGrid(e.target.value);
}

function enableColorMode() {
    currentMode = 'color';
    updateColor(colorPicker.value);
}

function enableErasermode() {
    currentMode = 'eraser';
    currentColor = 'white';
}

function initGrid(size) {
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.classList.add('square');
        square.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = currentColor;
        });
        grid.insertAdjacentElement('beforeend', square);
    }
}

function clearGrid() {
    let buttons = document.getElementsByClassName('square');
    for (let button of buttons) {
        button.style.backgroundColor = 'white';
    }
}

function activeButton(newMode) {
    if (currentMode === 'color') {
        colorMode.classList.add('active');
    } else if (currentMode === 'rainbow') {
        colorMode.classList.add('active');
    } else if (currentMode === 'eraser') {
        colorMode.classList.add('active');
    }
}

initGrid(16);