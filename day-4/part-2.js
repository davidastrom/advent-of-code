import { readFileSync } from "fs";

export function part2() {
    var textInput = readFileSync("./day-3/input.txt", "utf-8");
    var inputs = textInput.split("\r\n").map(line => line.split("").map(Number));
    var rows = inputs.length;
   
}