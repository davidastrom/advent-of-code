import { readFile, readTestFile } from "../utils.js";
export async function part2() {
    const testInput = await readTestFile(2);
    const input = await readFile();
    console.log(sumPowerGames(testInput));
    console.log(sumPowerGames(input));
}
function sumPowerGames(input) {
    return input.reduce((acc, gameStr) => {
        const [game, score] = gameStr.split(":");
        const maxDict = new Map([
            ["red", 0],
            ["green", 0],
            ["blue", 0],
        ]);
        const rounds = score.split(";");
        rounds.forEach((round) => {
            const draws = round.split(",");
            draws.forEach((draw) => {
                const [value, color] = draw.trim().split(" ");
                maxDict.set(color, Math.max(maxDict.get(color) ?? 0, parseInt(value)));
            });
        });
        const gamePower = Array.from(maxDict.values()).reduce((acc, val) => acc * val, 1);
        acc += gamePower;
        return acc;
    }, 0);
}
//# sourceMappingURL=index.js.map