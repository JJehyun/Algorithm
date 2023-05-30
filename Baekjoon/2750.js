const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
let N = parseInt(input[0]);
let newInput = [];
for (let i = 1; i <= N; i++) newInput.push(parseInt(input[i]));
function sort(arr) {
    let tmp = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
    return arr;
}
function Solution(newInput) {
    newInput = sort(newInput);
    console.log(newInput.join("\n"));
}

// Solution 함수 실행
Solution(newInput);
