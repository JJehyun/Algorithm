///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("");
//stack []
let stack = [];
let size = 0;
for (let i = 0; i < input.length; i++) {
  //레이저 발사
  if (input[i] === "(" && input[i + 1] === ")") {
    //현재 스택에 저장되어 있는 쇠막대기 갯수 추가
    size += stack.length;
    //레이저 뛰어넘기
    i += 1;
  } else if (input[i] === "(") {
    stack.push("(");
  } else if (input[i] === ")") {
    stack.pop();
    size += 1;
  }
}

console.log(size);
