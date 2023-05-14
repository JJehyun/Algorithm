//소수 구하기
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
//인풋 받기
let [n,m] = fs.readFileSync(readFileSyncAddress).toString().trim().split(" ").map(Number);
const arr = Array.from(Array(m+1).keys())
for(let i=2; i<=Math.sqrt(m); i++){
    if(arr[i])
        for(let j = i*i; j<=m; j+=i){
            arr[j] = false;
        }
}
arr.splice(0,2,false,false)
for(let i = n; i<=m; i++){
    if(arr[i]) console.log(arr[i])
}