//팩토리얼
const fs = require("fs");
//백준 제출 할 때 주석 제거
const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
// const readFileSyncAddress = "example.txt";
//인풋 받기
const input = parseInt(fs.readFileSync(readFileSyncAddress).toString().trim());
let answer = 1;
for (let i = input; i >= 1; i--){
    answer *= i;
}
console.log(answer);