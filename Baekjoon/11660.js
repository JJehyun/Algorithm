fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
input.slice(0, N).forEach((row, x) => {
    row.forEach((cell, y) => {
        table[x + 1][y + 1] = cell;
    });
});
for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
        table[x][y] += table[x - 1][y] + table[x][y - 1] - table[x - 1][y - 1];
    }
const coords = input.slice(N);
const output = [];
coords.forEach(([x1, y1, x2, y2]) => {
    output.push(table[x2][y2] - table[x1 - 1][y2] - table[x2][y1 - 1] + table[x1 - 1][y1 - 1]);
});
console.log(output.join('\n'));
