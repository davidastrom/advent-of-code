import { readFileSync } from "fs";

export function part1() {
    var textInput = readFileSync("./day-4/input.txt", "utf-8");
    var inputChunks = textInput.split("\r\n\r\n");
    var draws = inputChunks.splice(0, 1)[0].split(",").map(Number);
    var boards = inputChunks.map(chunk => chunk.split("\r\n").map((row) => row.split(" ").filter(Boolean).map(cell => {return {value: parseInt(cell), found: false}})));

    return bingo(draws, boards);
}

function bingo(draws, boards) {
    for (let i = 0; i < draws.length; i++) {
        const draw = draws[i];
        
        for (let j = 0; j < boards.length; j++) {
            const board = boards[j];
            
            for (let k = 0; k < board.length; k++) {
                const row = board[k];
                
                for (let l = 0; l < row.length; l++) {
                    const cell = row[l];
                    
                    if (cell.value == draw) {
                        cell.found = true
                        
                        if (checkBingo(board, k, l)) {
                            console.log(board);
                            console.log(draw);
                            return board.reduce((sum, row) => sum + row.reduce((rowSum, cell) => {return cell.found ? rowSum : rowSum+cell.value}, 0), 0) * draw;
                        }
                    }
                }
            }
        }
    }
}

function checkBingo(board, row, col) {
    return checkHorizontal(board, row) || checkVertical(board, col) || checkDiagonal(board)
}

function checkHorizontal(board, row) {
    for (let i = 0; i < board.length; i++) {
        if (!board[row][i].found) {
            return false;
        }
    }
}

function checkVertical(board, col) {
    for (let i = 0; i < board.length; i++) {
        if (!board[i][col].found) {
            return false;
        }
    }
}

function checkDiagonal(board) {
    var down = true;
    var up = true;
    for (let i = 0; i < board.length; i++) {
        if (!board[i][i].found) {
            down = false;
        }        
        if (!board[i][board.length-1-i].found) {
            up = false;
        }
    }
    return down || up;
}