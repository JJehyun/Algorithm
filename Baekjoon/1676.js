//팩토리얼0의 갯수
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
const input = parseInt(fs.readFileSync(readFileSyncAddress).toString().trim());
let countTwo = 0;
let countFive = 0;

for(let i = 2; i <= input; i++){
    let num = i;
    while(num % 2 === 0){
        countTwo++;
        num /= 2;
    }
    while(num % 5 === 0){
        countFive++;
        num /= 5;
    }
}

console.log(Math.min(countTwo, countFive));