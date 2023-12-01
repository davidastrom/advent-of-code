import { readFileSync } from "fs";

export function part2() {
    var textInput = readFileSync("./day-2/input.txt", "utf-8");
    var inputs = textInput.split("\r\n").map(line => line.split(" ", 2));

    var position = 0;
    var depth = 0;
    var aim = 0;
    inputs.forEach(input => {
        switch (input[0]) {
            case 'forward':
                position += Number(input[1]);
                depth += Number(input[1])*aim;
                break;
            case 'up':
                aim -= Number(input[1]);
                break;
            case 'down':
                aim += Number(input[1]);
                break;
            default:
                break;
        }
    })
    return position*depth;
}