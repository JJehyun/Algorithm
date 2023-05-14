const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let [count, ...input] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
count = Number(count);
input = input.map(Number);solution(input, count);solution(input, count);
function solution(input, count) {
    const dp = Array(input.length).fill(0);
    dp[0] = input[0];
    dp[1] = input[0] + input[1];
    dp[2] = Math.max(input[0], input[1]) + input[2];

    for (let i = 3; i < input.length; i += 1) {
        dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
    }
    // console.log(dp);
    console.log(dp[count - 1]);
}
solution(input, count);