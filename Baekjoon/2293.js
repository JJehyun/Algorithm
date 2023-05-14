const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
function solution() {
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= target; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[target];
}

let coins = [1, 2, 5];
let target = 10;
let dp = Array(target + 1).fill(0);
dp[0] = 1;
console.log(solution());