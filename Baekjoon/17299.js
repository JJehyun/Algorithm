///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const num = Number(input[0]);
input = input[1].split(" ").map((item) => Number(item));
// -1로 채워진 ans 배열 생성
let ans = new Array(num).fill(-1);
// count에는 중복되는 숫자의 개수를 넣어줄 것임. key - value 형태로.
// 예를들어, 1이 3개면 "1" : 3 이런식.
let count = {};
let hasMap = new Map();
// input에 있는 원소를 하나씩 돌리면서
// count[x]가 존재한다면 value + 1
// count[x]가 없다면 0 + 1
input.forEach((x) => {
  //값을 가지고 있지 않는다면,
  if (!hasMap.has(x)) hasMap.set(x, 1);
  //값을 이미 가지고 있다면
  else hasMap.set(x, hasMap.get(x) + 1);
});
//Map(4) { 1 => 3, 2 => 2, 3 => 1, 4 => 1 }
// 순회
for (let i = 0; i < num; i++) {
  while (
    stack.length &&
    count[input[stack[stack.length - 1]]] < count[input[i]]
  ) {
    ans[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(ans.join(" "));
