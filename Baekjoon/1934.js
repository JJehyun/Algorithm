const fs = require("fs");
//유클리드 호제법
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
let num = input.shift();
let answer = [];
for (value of input){
    let number = value.split(" ");
    let a = number[0];
    let b = number[1];
    while(a % b !== 0){
        let r = a % b
        if(r !== 0) {
            a = b;
            b = r;
        }
    }
    let min = number[0] * number[1] / b
    answer.push(min)
}
console.log(answer.join('\n'))
