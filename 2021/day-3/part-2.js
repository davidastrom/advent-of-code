import { readFileSync } from "fs";

export function part2() {
    var textInput = readFileSync("./day-3/input.txt", "utf-8");
    var inputs = textInput.split("\r\n").map(line => line.split("").map(Number));
    var rows = inputs.length;
    
    var oxygenRows = [...inputs];
    var CO2Rows = [...inputs];

    var oxygenRes = recursiveHelper(oxygenRows, 0, 1, 0);
    var CO2Res = recursiveHelper(CO2Rows, 0, 0, 1);

    return parseInt(oxygenRes.join(""), 2) * parseInt(CO2Res.join(""), 2)
}

function colSums(matrix, col) {   
    return matrix.map((row) => row[col]).reduce((sum, a) => sum+a, 0);
}

function recursiveHelper(matrix, index, max, min) {
    if (matrix.length == 1 || index >= matrix[0].length) {
        console.log(matrix);
        return matrix[0];
    }

    var colSum = colSums(matrix, index);

    if (colSum >= matrix.length/2) {
        return recursiveHelper(matrix.filter(row => row[index] == max), index + 1, max, min);
    } 
    else 
    {
        return recursiveHelper(matrix.filter(row => row[index] == min), index + 1, max, min);
    }
}