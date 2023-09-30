const label = document.querySelector(".grid-size");
const input = document.querySelector('input');  //number of boxes per row/column
const grid = document.querySelector(".box");
const resetbtn = document.querySelector(".b6");
const blackbtn = document.querySelector(".b4");
const rgbbtn = document.querySelector(".b5");

function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createDiv()
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    blackbtn.addEventListener("click", (event) =>{
      cell.addEventListener("mouseover", (event) =>
      {   cell.classList.add('black'); })
    })
    
    rgbbtn.addEventListener("click", (event) =>{

      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = getRandomColor()});
      
    })
}

input.addEventListener('input', (event) => {

  squareSize = input.value;
  //updating the label which shows us the grid size
  label.textContent = `${squareSize}x${squareSize}`;

  grid.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;  

  grid.innerHTML = '';

  for( let i=0; i<(squareSize*squareSize); i++)
  {   createDiv();   }
})

resetbtn.addEventListener("click", (event) => 
{
  grid.innerHTML = '';
})

