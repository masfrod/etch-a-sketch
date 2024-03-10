const container = document.querySelector('.container');

function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
        container.appendChild(cells).className='grids'   
        }
    }

makeDivs(256);

const div = document.querySelectorAll('.grids');

div.forEach((grid) => {
    grid.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor='black';
    }, 300);
});

div.forEach((grid) => {
    grid.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor='';
    }, 300);
});
