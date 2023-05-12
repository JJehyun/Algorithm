//알파벳 찾기 구하기 알파벳이 처음 등장하는 위치를 찾는
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = require('fs').readFileSync(readFileSyncAddress).toString().split('')

console.log(input)