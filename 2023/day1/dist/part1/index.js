import { readFile, readTestFile } from "../utils.js";
export async function part1() {
    const testInput = await readTestFile();
    const input = await readFile();
    console.log(sumArray(testInput));
    console.log(sumArray(input));
}
const sumArray = (arr) => {
    return arr.reduce((acc, str) => {
        return acc + parseInt(getNumString(str));
    }, 0);
};
const getNumString = (str) => {
    let firstNum = null;
    let lastNum = null;
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
//# sourceMappingURL=index.js.map