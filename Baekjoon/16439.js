const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const favor = [];
for (let i = 0; i < n; i++) {
    favor.push(input[i].split(" ").map(Number));
}
let visited = Array(m).fill(false);
let combination = [];
let result = 0;
// 3가지의 치킨 조합 만들기
const makeCombi = (start, num) => {
    if (num === 3) {
        let temp = makeSum(combination[0], combination[1], combination[2]);
        if (temp > result) result = temp;
        return;
    }
    for (let i = start; i < m; i++) {
        if (!visited[i]) {
            visited[i] = true;
            combination.push(i);
            makeCombi(i, num + 1);

            visited[i] = false;
            combination.pop();
        }
    }
};
const makeSum = (a, b, c) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.max(favor[i][a], favor[i][b], favor[i][c]);
    }
    return sum;
};
makeCombi(0, 0);
console.log(result);