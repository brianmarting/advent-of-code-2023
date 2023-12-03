import * as fs from "fs";
import * as path from "path";

export const getInput = (filename: string, day: number): string[] => {
    return fs.readFileSync(path.resolve(__dirname, `../${day}/${filename}`), "utf-8")
        .trim()
        .split('\n');
}