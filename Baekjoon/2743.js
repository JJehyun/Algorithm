//알파벳 갯수 구하기
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("");

const RegExp = /[a-zA-Z]/
let answer = 0;
for ( i of input){
    if(RegExp.test(i)){
    answer +=1 ;
    }
}
console.log(answer)