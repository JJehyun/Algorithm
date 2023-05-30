const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const [H, W] = input;
let MAX = Math.max(H, W)
const cnt = [];
let cheese = 0;
for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (map[i][j] == 1) {
            cheese++;
        }
    }
}
cnt.push(cheese)
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const out = [[0, 0]];
while (out.length > 0) {
    const [x, y] = out.shift();
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < H && ny < W && map[nx][ny] == 0) {
            map[nx][ny] = MAX;
            out.push([nx, ny])
        }
    }
}
while (cheese > 0) {
    const melting = [];
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (map[i][j] == MAX)
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if (nx >= 0 && ny >= 0 && nx < H && ny < W && map[nx][ny] == 1) {
                        melting.push([nx, ny])
                    }
                }
        }
    }
    melting.forEach(v => {
        const [x, y] = v;
        if (map[x][y] == 1) {
            map[x][y] = MAX - 1;
            out.push([x, y])
            cheese--;
        }
    })
    MAX--;
    cnt.push(cheese)
    while (out.length > 0) {
        const [x, y] = out.shift();
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < H && ny < W && map[nx][ny] == 0) {
                map[nx][ny] = MAX;
                out.push([nx, ny])
            }
        }
    }
}
const time = cnt.length - 1;
const last = cnt[time - 1];
console.log(time + '\n' + last)
