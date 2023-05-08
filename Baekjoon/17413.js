///dev/stdin
//"example.txt"
const { count } = require("console");
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("");
let flag = false;
let tmp = [];
let result = "";
for (let word of input) {
  if (word === "<") {
    if (tmp.length !== 0) {
      result += tmp.reverse().join("");
      tmp = [];
    }
    result += word;
    flag = true;
  } else if (word === ">") {
    result += word;
    flag = false;
  } else if (flag === false) {
    if (word === " ") {
      result += tmp.reverse().join("");
      result += " ";
      tmp = [];
    } else {
      tmp.push(word);
    }
  } else if (flag === true) {
    result += word;
  }
}
if (tmp.length !== 0) result += tmp.reverse().join("");
console.log(result);
