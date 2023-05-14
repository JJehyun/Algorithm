const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
let whole = input.shift()
let num = input[0].split(" ").map(Number)
let count = 0;
for (value of num){
    let boolean = true;
    if(value === 1){
        boolean = false
    }
    for (let i = 2 ; i < value; i++) {
        if(value % i === 0){
            boolean = false
            break;
        }
    }
    if(boolean) count++;
}
console.log(count)