///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(" ");
let whole = Number(input[0]);
let num = Number(input[1]);
//정답
let result = [];
//스택
let stack = [];
for (let i = 1; i <= whole; i++) {
  stack.push(i);
}
while (stack.length !== 0) {
  for (let i = 0; i < num - 1; i++) {
    if (stack.length === 1) break;
    // 맨앞의 값을 맨뒤로 push
    stack.push(stack.shift());
  }
  //스택 맨 앞의 값을 결과값에 푸쉬
  result.push(stack.shift());
}
console.log("<" + result.join(", ") + ">");
