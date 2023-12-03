import { readFile, readTestFile } from "../utils.js";
export async function part2() {
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
    Array.from(str).forEach((char, index) => {
        const num = parseInt(char);
        if (!isNaN(num)) {
            if (firstNum === null) {
                firstNum = num;
            }
            lastNum = num;
        }
        const startsWithDigit = Object.keys(digitStrings).find((digitString) => {
            return str.startsWith(digitString, index);
        });
        if (startsWithDigit) {
            const digit = digitStrings[startsWithDigit];
            if (firstNum === null) {
                firstNum = digit;
            }
            lastNum = digit;
        }
    });
    return `${firstNum}${lastNum}`;
};
const digitStrings = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};
//# sourceMappingURL=index.js.map