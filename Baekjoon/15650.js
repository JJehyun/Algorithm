fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");let visit = new Array(parseInt(n)).fill(false);
n = parseInt(n);
m = parseInt(m);
let ans = [];
let result = '';
function dfs(d, idx) {
    if (d === m) {
        console.log(...ans);
        return;
    }
    for (let i = idx; i < n; i++) {
        if (visit[i]) continue;
        visit[i] = true;
        ans.push(i + 1);
        dfs(d + 1, i);
        ans.pop();
        visit[i] = false;
    }
}
dfs(0, 0);

