fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const apples = input.slice(2, 2 + K).map(v => v.split(' ').map(Number));
const rotations = input
    .slice(K + 3)
    .reduce((acc, v) => {
        const [time, direction] = v.split(' ');
        acc[time] = direction === 'L' ? -1 : 1;
        return acc;
    }, {});
const board = [...Array(N)].map(() => Array(N).fill(0));
apples.forEach(([x, y]) => board[x - 1][y - 1] = 2);
const offset = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const snake = [[0, 0]];
board[0][0] = 1;
let direction = 0;
let tailIndex = 0;
let time = 0;

while (true) {
    time++;
    const [x, y] = snake[snake.length - 1];
    const [dx, dy] = offset[direction];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny] === 1) {
        break;
    }

    if (!board[nx][ny]) {
        const [tx, ty] = snake[tailIndex];
        board[tx][ty] = 0;
        tailIndex++;
    }

    snake.push([nx, ny]);
    board[nx][ny] = 1;

    direction = (direction + 4 + (rotations[time] ?? 0)) % 4;
}

console.log(time);
