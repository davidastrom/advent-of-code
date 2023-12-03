import { readFile, readTestFile } from "../utils.js";

export async function part1() {
  const testInput = await readTestFile();
  const input = await readFile();

  console.log(sumArray(testInput));
  console.log(sumArray(input));
}

const sumArray = (arr: string[]) => {
  return arr.reduce((acc, str) => {
    return acc + parseInt(getNumString(str));
  }, 0);
};

const getNumString = (str: string): string => {
  let firstNum: number | null = null;
  let lastNum: number | null = null;
  Array.from(str).forEach((char) => {
    const num = parseInt(char);
    if (!isNaN(num)) {
      if (firstNum === null) {
        firstNum = num;
      }
      lastNum = num;
    }
  });
  return `${firstNum}${lastNum}`;
};
