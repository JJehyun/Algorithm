fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
function countWays(input) {
    const dp = Array.from(Array(5), () => Array(N + 1).fill(0));
    dp[0][0] = 1;
    for (let j = 1; j <= input; j++) {
        dp[0][j] = dp[0][j - 1] + dp[1][j - 1] + dp[3][j - 1];
        dp[1][j] = dp[0][j - 1] + dp[1][j - 1];
        dp[2][j] = dp[0][j - 1] + dp[2][j - 1];
        dp[3][j] = dp[0][j - 1] + dp[3][j - 1];
        dp[4][j] = dp[0][j - 1] + dp[1][j - 1] + dp[2][j - 1] + dp[3][j - 1] + dp[4][j - 1];
    }

    return dp[0][N];
}

const N = 4;
const result = countWays(input);
console.log(result);
