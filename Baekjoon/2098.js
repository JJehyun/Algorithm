const fs = require('fs');
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split('\n').map(v=>v.split(' ').map(Number))
const [N] = input.shift();
let cost = Array.from(Array(N),()=>Array(1<<N).fill(-1));
const dfs = (now,visited)=>{
    if(visited==(1<<N)-1){
        if(input[now][0]==0) return Infinity;
        else return input[now][0];
    }
    if(cost[now][visited] != -1) return cost[now][visited];
    cost[now][visited] = Infinity;
    for(let i = 0; i<N; i++){
        if(input[now][i]==0) continue;
        if((visited & (1<<i))) continue;
        cost[now][visited] = Math.min(cost[now][visited],input[now][i]+dfs(i,visited| (1<<i)));
    }
    return cost[now][visited];
}

console.log(dfs(0,1));
