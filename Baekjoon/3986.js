///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const [N, ...arr] = require("fs").readFileSync(readFileSyncAddress).toString().trim().split("\n");
let count = 0;
for (let word of arr) {
    if (word.length % 2 === 0) {
        let prevWord = word;
        let isGoodWord = true;
        while (prevWord) {
            const newWord = prevWord.replace(/A{2}|B{2}/g, "");
            if (newWord === prevWord) {
                isGoodWord = false;
                break;
            }
            prevWord = newWord;
        }
        if (isGoodWord) count++;
    }
}
console.log(count);
