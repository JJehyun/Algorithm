//차량번호판 1
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");let visit = new Array(parseInt(n)).fill(false);
const inputTestCase = input[0];
function solution(testCase) {
    let result = 1;
    let maxC = 26;
    let maxD = 10;
    if(testCase[0] == 'c') result = maxC;
    else if(testCase[0] == 'd') result = maxD;
    for(let i=1; i<testCase.length; i++) {
        let multi;
        let current = testCase[i];
        let prev = testCase[i-1];
        if(current === 'c') multi = maxC;
        else multi = maxD;
        if(current === prev) multi--;
        result *= multi;
    }
    console.log(result);
}
solution(inputTestCase);
