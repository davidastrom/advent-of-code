import { readFileSync } from "fs";

export function part1() {
    var textInput = readFileSync("./day-2/input.txt", "utf-8");
    var inputs = textInput.split("\r\n").map(line => line.split(" ", 2));

    var position = 0;
    var depth = 0;
    inputs.forEach(input => {
        switch (input[0]) {
            case 'forward':
                position += Number(input[1]);
                break;
            case 'up':
                depth -= Number(input[1]);
                break;
            case 'down':
                depth += Number(input[1]);
                break;
            default:
                break;
        }
    })
    return position*depth;
}
