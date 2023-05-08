///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";

// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";

// 4,3,6,8,7,5,2
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\r\n");
//N - 피연산자 갯수
//str - 후위 표기식
//array - 피연산자에 대응하는 값
let [N, str, ...array] = input;
let arr = str.split("");
console.log(arr);
//정답 stack
let stack = [];
let hashmap = new Map();
console.log(array);
for (x of arr) {
  //영어인지 아닌지 판별
  let regExp = /[a-zA-Z]/g;
  if (regExp.test(x)) {
    //알파벳에 대응되는 값 stack.push
    if (!hashmap.get(x)) {
      hashmap.set(x, Number(array.shift()));
      stack.push(hashmap.get(x));
    } else {
      stack.push(hashmap.get(x));
    }
    console.log(hashmap.get(x));
  } else {
    let tmp2 = stack.pop();
    let tmp1 = stack.pop();
    switch (x) {
      case "*":
        stack.push(tmp1 * tmp2);
        break;
      case "/":
        stack.push(tmp1 / tmp2);
        break;
      case "+":
        stack.push(tmp1 + tmp2);
        break;
      case "-":
        stack.push(tmp1 - tmp2);
        break;
      default:
        break;
    }
  }
}
console.log(stack[0].toFixed(2));
