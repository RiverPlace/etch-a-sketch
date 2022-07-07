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

let grid = document.querySelector('.grid');

slider.addEventListener('input', (e) => updateColor);
colorPicker.addEventListener('input', (e) => currentColor = e.target.value);
colorMode.addEventListener('click', () => currentMode = 'color');
rainbowMode.addEventListener('click', () => currentMode = 'rainbow');
eraserMode.addEventListener('click', () => currentMode = 'eraser');
clearBtn.addEventListener('click', () => clearGrid);

function updateColor(e) {
    currentColor = e.target.value;
}

function initGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.classList.add('square');
        square.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = currentColor;
        })
        grid.insertAdjacentElement('beforeend', square);
    }
}

function clearGrid() {
    let buttons = document.getElementsByClassName('square');
    for (let button of buttons) {
        button.style.backgroundColor = 'white';
    }
}

slider.addEventListener('input', (e) => {
    let gridSize = document.getElementById('grid-size');
    gridSize.value = e.target.value;
    initGrid(e.target.value);
});


function activeButton(mode) {
    if (currentMode === 'color') {

    }
}

initGrid(16);