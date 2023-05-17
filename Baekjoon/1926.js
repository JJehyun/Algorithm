fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const [ROW, COLUMN] = input.shift().split(' ').map(Number);
const PAPER = input.map((el) => {
    return el.split(' ').map(Number);
});
function solution(ROW, COLUMN, PAPER) {
    let visited = Array.from({ length: ROW }, () =>
        new Array(COLUMN).fill(false)
    );
    const isValidIndex = (row, col) => {
        return 0 <= row && row < ROW && 0 <= col && col <= COLUMN;
    };
    const directionObj = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
    };
    const BFS = (row, col) => {
        let queue = [[row, col]];
        let area = 1;
        while (queue.length !== 0) {
            let [x, y] = queue.shift();
            Object.values(directionObj).map((dir) => {
                let [nx, ny] = [x + dir[0], y + dir[1]];
                if (isValidIndex(nx, ny)) {
                    if (PAPER[nx][ny] === 1 && visited[nx][ny] === false) {
                        visited[nx][ny] = true;
                        area += 1;
                        queue.push([nx, ny]);
                    }
                }
            });
        }
        return area;
    };
    let drawingCount = 0;
    let area = 0;
    let maxArea = 0;
    for (let i = 0; i < ROW; i += 1) {
        for (let j = 0; j < COLUMN; j += 1) {
            if (PAPER[i][j] === 1 && visited[i][j] === false) {
                visited[i][j] = true;
                area = BFS(i, j);
                if (area > maxArea) maxArea = area;
                drawingCount += 1;
            }
        }
    }
    console.log(drawingCount);
    console.log(maxArea);
}

solution(ROW, COLUMN, PAPER);