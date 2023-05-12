//알파벳 찾기 구하기 알파벳이 처음 등장하는 위치를 찾는
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = require('fs').readFileSync(readFileSyncAddress).toString().split('\n')

const t = input.filter(str => str.length < 1)

if (t.length) {
    input.splice(input.indexOf(t[0]), 1)
}

input.forEach(str => {
    const lower = str.length - str.replace(/[a-z]/g, '').length
    const upper = str.length - str.replace(/[A-Z]/g, '').length
    const num = str.length - str.replace(/[0-9]/g, '').length
    const blank = str.length - str.replace(/\ /g, '').length

    console.log(lower, upper, num, blank)
})