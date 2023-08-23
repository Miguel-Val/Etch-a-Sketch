const grid = document.querySelector('.grid');
const row = document.querySelector('.row');
const defaultPx = document.querySelector('.sixTeen');
const thrityTwo = document.querySelector('.thrityTwo');
const fortyEight = document.querySelector('.fortyEight');
const sixtyTwo = document.querySelector('.sixtyFour');


defaultPx.addEventListener('click', () => {
    
    num(16)
    
})

thrityTwo.addEventListener('click', () => {
    
    
    num(32)
})

fortyEight.addEventListener('click', () => {
    
    num(48)
})

sixtyTwo.addEventListener('click', () => {
    
    num(62);
})
num(16);



function num (gridSize) {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        grid.append(newRow);

        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('gridDiv');
            newRow.append(newDiv);
        }
    }
    const gridWidth = 700;
    const gridHeight = 700;

    // Calculate box dimensions
    const boxWidth = gridWidth / gridSize;
    const boxHeight = gridHeight / gridSize;

    const gridDivs = document.querySelectorAll('.gridDiv');
    gridDivs.forEach((div) => {
        div.style.width = `${boxWidth}px`;
        div.style.height = `${boxHeight}px`;
    });
}
 // Number of rows and columns



// Create boxes for rows




