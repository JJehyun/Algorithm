//나머지
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(" ").map(Number);
const [A,B,C] = input
let answer = [];
answer.push((A+B)%C);
answer.push(((A%C) + (B%C))%C)
answer.push((A*B)%C)
answer.push( ((A%C) * (B%C))%C)
console.log(answer.join('\n'))