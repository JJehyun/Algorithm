//알파벳 찾기 구하기 알파벳이 처음 등장하는 위치를 찾는
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("");
let str = ['a', 'b' ,'c' ,'d' ,'e' ,'f', 'g','h','i' ,'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x' ,'y', 'z'];
//hashMep 생성
let hashMap = new Map();
//Map 초기화
for (i of str)hashMap.set(i,-1)
for(let i=0;i<input.length;i++){
    if(hashMap.get(input[i]) === -1) hashMap.set(input[i],i);
}
//배열로 변환
let answer = Array.from(hashMap.values());
console.log(answer.join(" "))