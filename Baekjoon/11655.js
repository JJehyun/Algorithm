//알파벳 찾기 구하기 알파벳이 처음 등장하는 위치를 찾는
const fs = require("fs");
//백준 제출 할 때 주석 제거
// const readFileSyncAddress = "./dev/stdin";
// VSC 테스트 할때 주석 제거
const readFileSyncAddress = "example.txt";
const inputs = require('fs').readFileSync(readFileSyncAddress).toString().split('\n')

let ans = [];
for(let i = 0; i < inputs.length; i++){
    let input = inputs[i].split("");
    let newAns = [];
    for(let j = 0; j < input.length; j++){
        let originalASCII = input[j].charCodeAt();
        let newASCII = originalASCII + 13;
        if(originalASCII >= 65 && originalASCII <= 90){
            if(newASCII > 90){
                newASCII = newASCII - 90 + 65 - 1;
            }
            newAns.push(String.fromCharCode(newASCII));
        } else if(originalASCII >= 97 && originalASCII <= 122){
            if(newASCII > 122){
                newASCII = newASCII - 122 + 97 - 1;
            }
            newAns.push(String.fromCharCode(newASCII));
        } else {
            newAns.push(input[j]);
        }
    }
    ans.push(newAns.join(""));
}
console.log(ans.join(" "));