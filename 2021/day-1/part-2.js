import { readFileSync } from "fs";

export function part2() {
    var textInput = readFileSync("./day-1/input.txt", "utf-8");
    var measurements = textInput.split("\n").map(Number);
    
    var chunkSum = []
    for (let index = 0; index < measurements.length; index++) {
        var chunk = measurements.slice(index, index+3);
        if (chunk.length == 3) {
            chunkSum.push(chunk.reduce((sum, a) => sum + a, 0))
        }
    }

    var increases = chunkSum.filter((val, index) => 
        val - (chunkSum[index-1] ?? val) > 0
    )
    return increases.length
}