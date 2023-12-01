import { readFileSync } from "fs";

export function part1() {
    var textInput = readFileSync("./day-1/input.txt", "utf-8");
    var measurements = textInput.split("\n").map(Number);
    var increases = measurements.filter((val, index) => 
        val - (measurements[index-1] ?? val) > 0
    )
    return increases.length
}