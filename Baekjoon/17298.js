///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const array = input[0].split(" ");
const result = [];
while (array.length !== 0) {
  const tmp = array.shift();
  const stack = [];
  for (let j = 0; j < array.length; j++) {
    if (tmp < array[j]) stack.push(array[j]);
  }
  result.push(stack[0] || -1);
}
console.log(result.join(" "));
