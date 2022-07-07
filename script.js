const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');
const slider = document.getElementById('slider');
let grid = document.querySelector('.grid');

function initGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.classList.add('square');
        square.addEventListener('click', function(e) {
            e.target.style.backgroundColor = 'black';
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

clear.addEventListener('click', clearGrid);

slider.addEventListener('input', (e) => {
    let gridSize = document.getElementById('grid-size');
    gridSize.value = e.target.value;
    initGrid(e.target.value);
});

initGrid(16);