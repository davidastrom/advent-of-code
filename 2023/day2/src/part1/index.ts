import { readTestFile, readFile } from "../utils.js";

export async function part1() {
  const testInput = await readTestFile(1);
  const input = await readFile()
   
  const maxDict = new Map<string, number>(
    [
      ["red", 12],
      ["green", 13],
      ["blue", 14],
    ]
  );
  console.log(validGames(testInput, maxDict));
  console.log(validGames(input, maxDict));
}

function validGames(input: string[], maxDict: Map<string, number>) {
  return input.reduce((acc, gameStr) => {
    const [game, score] = gameStr.split(":");
    const gameId = parseInt(game.split(" ")[1]);
    let validGame = true;

    const rounds = score.split(";");
    rounds.forEach((round) => {
      const draws = round.split(",");
      if (draws.some((draw) => {
        const [value, color] = draw.trim().split(" ");
        return parseInt(value) > (maxDict.get(color) ?? 0);
      })) {
        validGame = false;
      }
    })

    if (validGame) {
      acc += gameId;
    }
    return acc
  }, 0)

}
