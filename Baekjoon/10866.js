///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\r\n");
//명령어 갯수
let len = input.shift();
//Deque 생성
let Deque = [];
//결과 출력
let result = [];
for (i of input) {
  let word = i.split(" ")[0];
  if (word === "push_front") Deque.unshift(i.split(" ")[1]);
  else if (word === "push_back") Deque.push(i.split(" ")[1]);
  else if (word === "pop_front") result.push(Deque.shift() || -1);
  else if (word === "pop_back") result.push(Deque.pop() || -1);
  else if (word === "size") result.push(Deque.length);
  else if (word === "empty") result.push(Deque.length === 0 ? 1 : 0);
  else if (word === "front") result.push(Deque[0] || -1);
  else result.push(Deque[Deque.length - 1] || -1);
}
console.log(result.join("\n"));
