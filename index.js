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
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const orange = document.querySelector('.orange')
const yellow = document.querySelector('.yellow')
const purple = document.querySelector('.purple')
const red = document.querySelector('.red')

let isColoring = true; // Declare globally
let isErasing = false;
let isMouseDown = false;

defaultPx.addEventListener('click', () => {
    gridFix(16)
    divStyle(16)
});
thrityTwo.addEventListener('click', () => {
    gridFix(32)
    divStyle(32)
});
fortyEight.addEventListener('click', () => {
    gridFix(48)
    divStyle(48)
});
sixtyTwo.addEventListener('click', () => {
    gridFix(62)
    divStyle(62)
});

gridFix(16);
divStyle(16);


function gridFix (gridSize) {
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
    })

    blue.addEventListener('click', () => {
        sum('blue')
        
    })


    gridDivs.forEach((div) => {
        div.addEventListener('mousedown', function sum (changeMes)  {
            isMouseDown = true;
            if (isErasing) {
                div.classList.remove('changeMe');
                div.classList.add('gridDiv');
            }else if (isColoring){
                div.classList.remove('gridDiv');
                div.classList.add(changeMes);    
            }else{
                div.classList.remove('gridDiv');
                div.classList.add('changeMe');
            }
            
        });
    
        div.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    
        div.addEventListener('mousemove', () => {
            if (isMouseDown && isColoring) {
                div.classList.remove('gridDiv');
                div.classList.add('changeMe');
            }else if(isMouseDown && isErasing){
                div.classList.remove('changeMe');
                div.classList.add('gridDiv');
            }else if(isMouseDown){
                div.classList.remove('gridDiv');
                div.classList.add('changeMe');
            }
        });
    });
    
    clearBtn.addEventListener('click', () => {
        gridDivs.forEach((div)=>{
            div.classList.remove('changeMe');
            div.classList.add('gridDiv');
        })
    })
 }


// ... your other code ...








