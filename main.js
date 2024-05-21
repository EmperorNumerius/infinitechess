let boardSize = 16;  // Initial board size (can be expanded)
let offsetX = 0;
let offsetY = 0;

const createSquare = (row, col) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
    square.dataset.row = row;
    square.dataset.col = col;
    square.addEventListener('click', () => onSquareClick(row, col));
    return square;
};

const renderBoard = (size) => {
    const chessboard = document.getElementById('board');
    chessboard.innerHTML = '';
    chessboard.style.gridTemplateColumns = `repeat(${size}, 60px)`;
    
    for (let row = offsetY; row < offsetY + size; row++) {
        for (let col = offsetX; col < offsetX + size; col++) {
            chessboard.appendChild(createSquare(row, col));
        }
    }
};

const onSquareClick = (row, col) => {
    console.log(`Square clicked: ${row}, ${col}`);
    // Implement your logic for square click here
};

const resetBoard = () => {
    offsetX = 0;
    offsetY = 0;
    renderBoard(boardSize);
};

document.addEventListener('DOMContentLoaded', () => {
    renderBoard(boardSize);
});

// Infinite scrolling
const boardElement = document.getElementById('board');

boardElement.addEventListener('scroll', () => {
    const scrollLeft = boardElement.scrollLeft;
    const scrollTop = boardElement.scrollTop;
    const clientWidth = boardElement.clientWidth;
    const clientHeight = boardElement.clientHeight;

    if (scrollLeft === 0) {
        offsetX -= 1;
        renderBoard(boardSize);
        boardElement.scrollLeft += 60;
    } else if (scrollLeft + clientWidth >= boardElement.scrollWidth) {
        offsetX += 1;
        renderBoard(boardSize);
        boardElement.scrollLeft -= 60;
    }

    if (scrollTop === 0) {
        offsetY -= 1;
        renderBoard(boardSize);
        boardElement.scrollTop += 60;
    } else if (scrollTop + clientHeight >= boardElement.scrollHeight) {
        offsetY += 1;
        renderBoard(boardSize);
        boardElement.scrollTop -= 60;
    }
});
