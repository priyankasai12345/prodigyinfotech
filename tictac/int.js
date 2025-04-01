const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(index) {
    if (gameState[index] !== '' || !gameActive) return;

    gameState[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
        gameActive = false;
        status.textContent =  `Player ${currentPlayer} wins!`;
    } else if (gameState.every(cell => cell !== '')) {
        gameActive = false;
        status.textContent = "It's a tie!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}

function restartGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    status.textContent = `Player ${currentPlayer}'s turn`;
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

restartButton.addEventListener('click', restartGame);

status.textContent = `Player ${currentPlayer}'s turn`;
function highlightWinningPattern(pattern) {
    pattern.forEach(index => {
        cells[index].classList.add('win-hover');
    });
}

function checkWinner() {
    const winningPattern = winPatterns.find(pattern => {
        const [a, b, c] = pattern;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });

    if (winningPattern) {
        highlightWinningPattern(winningPattern);
        return true;
    }

    return false;
}

function restartGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('win-hover');
    });
    status.textContent = `Player ${currentPlayer}'s turn`;
}
const winnerMessage = document.getElementById('winnerMessage');

function handleCellClick(index) {
    if (gameState[index] !== '' || !gameActive) return;

    gameState[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
        gameActive = false;
        status.textContent = `Player ${currentPlayer} wins!`;
        winnerMessage.textContent = `Hover to see the winner: Player ${currentPlayer}`;
        winnerMessage.classList.add('winner-visible');
    } else if (gameState.every(cell => cell !== '')) {
        gameActive = false;
        status.textContent = "It's a tie!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function restartGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    status.textContent = `Player ${currentPlayer}'s turn`;
    winnerMessage.textContent = 'Hover to see the winner!';
    winnerMessage.classList.remove('winner-visible');
}
if (checkWinner()) {
    gameActive = false;
    status.textContent = `Player ${currentPlayer} wins!`;
    status.classList.add('winning-message'); // Add this line
}