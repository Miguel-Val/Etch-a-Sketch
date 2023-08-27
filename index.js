// Selecting DOM elements
const grid = document.querySelector('.grid');
const row = document.querySelector('.row');
const defaultPx = document.querySelector('.sixTeen');
const thrityTwo = document.querySelector('.thrityTwo');
const fortyEight = document.querySelector('.fortyEight');
const sixtyTwo = document.querySelector('.sixtyFour');
const clearBtn = document.querySelector('.clear');
const gridDivs = document.querySelectorAll('.gridDiv');
const changeMe = document.querySelectorAll('.changeMe');
const eraserBtn = document.querySelector('.eraser');
const colorBtn = document.querySelector('.color');
const rainbowBtn = document.querySelector('.rainbow');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
const red = document.querySelector('.red');
const rainbowColors = ['#bae1ff', '#ffb3ba', '#FAC898', '#ffffba', '#C3B1E1', '#baffc9'];
let rainbowColorIndex = 0;
let currentColor;

// Global state variables
let isColoring = true;
let isErasing = false;
let isMouseDown = false;

// Default grid setup
defaultPx.addEventListener('click', () => {
    gridFix(16);
    divStyle(16);
});
thrityTwo.addEventListener('click', () => {
    gridFix(32);
    divStyle(32);
});
fortyEight.addEventListener('click', () => {
    gridFix(48);
    divStyle(48);
});
sixtyTwo.addEventListener('click', () => {
    gridFix(62);
    divStyle(62);
});

gridFix(16);
divStyle(16);

// Function to create the grid
function gridFix(gridSize) {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.append(newRow);
        newRow.setAttribute('draggable', 'false');

        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridDiv');
            newRow.append(newDiv);
            newDiv.setAttribute('draggable', 'false');
        }
    }
}

// Function to style grid cells
function divStyle(gridSize) {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.append(newRow);
        newRow.setAttribute('draggable', 'false');

        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridDiv');
            newRow.append(newDiv);
            newDiv.setAttribute('draggable', 'false');
        }
    }
    
}


function divStyle (gridSize) {
    let isColoring;
    let isErasing;
    let isMouseDown;
    const gridDivs = document.querySelectorAll('.gridDiv');
    const gridWidth = 700;
    const gridHeight = 700;
    const boxWidth = gridWidth / gridSize;
    const boxHeight = gridHeight / gridSize;
    gridDivs.forEach((div) => {
        div.style.width = `${boxWidth}px`;
        div.style.height = `${boxHeight}px`;
    });
    eraserBtn.addEventListener('click', () => {
        isColoring = false;
        isErasing = true;
    })

    colorBtn.addEventListener('click', () => {
        isErasing = false;
        isColoring = true;
    });
    let isRainbowMode = false;
    rainbowBtn.addEventListener('click', () => {
        isErasing = false;
        isColoring = false;
        isRainbowMode = true;
    });


    blue.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#b2ebf2'
        
    })
    green.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#baffc9'
        
    })

    yellow.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#ffffba'
        
    })

    orange.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#FAC898'
        
    })

    purple.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#C3B1E1'
        
    })

    red.addEventListener('click', () => {
        isColoring = true;
        isErasing = false;
        currentColor = '#ffb3ba'
        
    })



    // Event listeners for grid cells
    gridDivs.forEach((div) => {
        div.addEventListener('mousedown', () => {
            isMouseDown = true;
            if (isErasing) {
                div.style.backgroundColor = 'white';
            } else if (isColoring) {
                div.style.backgroundColor = currentColor;
            } else if (isRainbowMode) {
                startRainbowMode(div);
            } else {
                div.style.backgroundColor = 'rgba(0, 0, 0, 0.904)';
            }
        });
    
        div.addEventListener('mouseup', () => {
            isMouseDown = false;
            isRainbowMode = false; // Reset rainbow mode
        });
    
        div.addEventListener('mousemove', () => {
            if (isMouseDown && isColoring) {
                div.style.backgroundColor = currentColor;
            } else if (isMouseDown && isErasing) {
                div.style.backgroundColor = 'white';
            } else if (isMouseDown && isRainbowMode) {
                startRainbowMode(div);
            } else if (isMouseDown) {
                div.style.backgroundColor = 'rgba(0, 0, 0, 0.904)';
            }
        });
    });
    
    // Function to start rainbow mode
    function startRainbowMode(div) {
        div.style.backgroundColor = rainbowColors[rainbowColorIndex];
        rainbowColorIndex = (rainbowColorIndex + 1) % rainbowColors.length;
    }
    
    // Event listener for the "Clear" button
    clearBtn.addEventListener('click', () => {
        gridDivs.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
    });
}
