
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const n = Number(input.shift());
const result = {};
for (let i = 0; i < n; i++) {
    let extension = input[i].split(".")[1];
    extension = extension.replace(/\r/g, "");
    result[extension] ? result[extension]++ : (result[extension] = 1);
}
let print = {};
Object.keys(result).sort().forEach((key) => {
    print[key] = result[key];
});
let a = "";
for (el in print) {
    a += `${el} ${print[el]}\n`;
}
console.log(a);