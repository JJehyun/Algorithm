const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const [a, b] = require("fs").readFileSync(readFileSyncAddress).toString().trim().split(" ").map(i=>parseInt(i));
let i = a;
let j = b;
while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)