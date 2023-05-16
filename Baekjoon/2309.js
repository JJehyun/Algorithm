// 일곱 난쟁이
const fs = require("fs");
//백준 제출 할 때 주석 제거
const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
// const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n").map(Number).sort((a,b)=>a-b);
let total = input.reduce((a,sum) => sum+=a,0)
let answer = [];
let i = 0;
while (input.length !== 7) {
    for (let j = i+1; j < input.length; j++) {
        if (total - (input[i] + input[j]) === 100) {
            input.splice(i, 1)
            //위에서 배열이 하나 줄었으니 j-1를 해줘야 됨
            input.splice(j-1, 1)
            break;
        }
    }
    i += 1;
}
console.log(input.join('\n'))