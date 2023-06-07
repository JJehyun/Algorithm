///dev/stdin
//"example.txt"
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input= require("fs").readFileSync(readFileSyncAddress).toString().trim().split("\n");
const dragon = input.splice(1);
let board = Array.from(Array(101), () => Array(101).fill(0));
let answer = 0;
const dir = [
    [0, 1],
    [-1, 0],
    [0, -1]
    [1, 0],
]
dragon.forEach(v => {
    const [x, y, d, g] = v;
    board[y][x] = true;
    let currY = y;
    let currX = x;
    let currD = d;
    let currG = 0;
    let prev = [[y, x]];
    while (currG <= g) {
        if (currG == 0) {
            currY += dir[currD][0];
            currX += dir[currD][1];
            prev.push([currY, currX])
            board[currY][currX] = true;
        } else {
            const L = prev.length - 1;
            for (let i = L - 1; i >= 0; i--) {
                const [prevY, prevX] = prev[i];
                const newY = prevX - currX + currY;
                const newX = -(prevY - currY) + currX;
                board[newY][newX] = true;
                prev.push([newY, newX])
            }
            currY = prev[prev.length - 1][0];
            currX = prev[prev.length - 1][1];
        }
        currG++;
        currD = (currD + 1) % 4;
    }
})
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (board[i][j] && board[i + 1][j] && board[i][j + 1] && board[i + 1][j + 1]) {
            answer++;
        }
    }
}

console.log(answer)
