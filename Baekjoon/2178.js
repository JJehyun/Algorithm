//미로탐색 , 화이팅 해야제~
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const [n, m] = input.shift().split(" ");
let graph = input.map(arr => arr.split("").map(x => +x));
const BFS = (n, m, arr) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let queue = [];
    queue.push({x: 0, y: 0});
    while (queue.length) {
        const target = queue.shift();
        for (let i = 0; i < 4; i++) {
            const nextX = target.x + dx[i];
            const nextY = target.y + dy[i];
            if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
                continue;
            }
            if (arr[nextX][nextY] !== 1) {
                continue;
            }
            arr[nextX][nextY] = arr[target.x][target.y] + 1;
            queue.push({x: nextX, y: nextY});
        }
    }
    return arr[n-1][m-1];
}
const answer = BFS(n, m, graph)
console.log(answer)