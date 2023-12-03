import path from "path";
import fs from "fs";
import readline from "readline";
export const readFile = async (fileName = "./files/input.txt") => {
    const lines = [];
    const instream = fs.createReadStream(path.resolve(process.cwd(), fileName));
    const rl = readline.createInterface({ input: instream });
    for await (const line of rl) {
        lines.push(line);
    }
    return lines;
};
export const readTestFile = async (part) => await readFile(`./files/test${part}.txt`);
//# sourceMappingURL=utils.js.map