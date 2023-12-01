import { readFileSync } from "fs";

export function part1() {
    var textInput = readFileSync("./day-3/input.txt", "utf-8");
    var inputs = textInput.split("\r\n").map(line => line.split("").map(Number));
    var rows = inputs.length;

    var transposed = inputs[0].map((col, i) => inputs.map((row) => row[i]));
    var colSums = transposed.map((row) => row.reduce((sum, a) => sum + a, 0));

    var gamma = [];
    var epsilon = [];

    colSums.forEach(sum => {
        if (sum > rows/2) {
            gamma.push(1);
            epsilon.push(0);
        } else {
            gamma.push(0);
            epsilon.push(1);
        }
    })

    var gammaDig = parseInt(gamma.join(''), 2);
    var epsilonDig = parseInt(epsilon.join(''), 2);

    return gammaDig * epsilonDig;
}
