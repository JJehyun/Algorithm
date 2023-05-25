//회문 문자열
function palindromeString(arr){
    //문자열 전체길이의 몫/2만큼만 비교하면 됨
    let answer = "YES";
    arr=arr.toLowerCase();
    for(let i = 0; i < Math.floor(arr.length); i++){
        // arr[0] -- arr[3]비교  <---->  arr[1] -- arr[2]비교
        if(arr[i] !== arr[arr.length -i -1]) return "NO"
    }
    return answer
}
console.log(palindromeString("gooG"))

//회문 문자열 reverse 함수 이용
function palindromeStringReverse(str){
    let answer = "YES"
    str = str.toLowerCase();
    if(str.split('').reverse().join('') !== str) return 'NO'
    return answer
}
console.log(palindromeStringReverse("gooG"))

//유효한 팰린드롬
function validPalindrome(str){
    let answer = "YES"
    str = str.toLowerCase().replace(/[^a-z]/g,'')//숫자 아닌것 제외
    if(str.split('').reverse().join('') !== str) return "NO"
    return answer
}
console.log(validPalindrome("asdsad213asdasd"))

//숫자만 추출하기
function extractNumbers(str){
    let answer = "";
    for (let x of str){
        //isNaN 문자열 - true
        //isNaN 숫자열 - false
        if(!isNaN(x)) answer += x;
    }
    return parseInt(answer)
}

console.log(extractNumbers("asda123azsd1"))

// 떨어진 문자의 거리 구하기
// for문 두바퀴
function DistanceFallenByACharacter(str,core){
    let answer = [];
    let p = 1000;
    //문자열 배열 만큼 배열을 순회 , 왼쪽에서 부터 떨어진 거리 구함
    for(let x of str){
        if(x === core) {
            //떨어진 거리0, core와 현재 글자가 같을때
            p = 0;
            answer.push(p)
        }else{
            //왼쪽에서부터 떨어진 거리
            p++
            answer.push(p)
        }
    }
    p=1000;
    //오른쪽으로 부터 떨어진 거리 구하기
    for (let i = str.length; i>=0; i--){
        if(str[i] === core){
            p = 0;
        }else{
            p++
            answer[i] = Math.min(answer[i],p);
        }
    }
    return "asd"
}
console.log(DistanceFallenByACharacter("asdmkasndasd" , 'e'));

//문자열 압축
function StringCompression(str){
    let answer = "";
    let count = 1;
    //맨 마지막 인덱스와 비교할 값 추가
    str=str+" ";
    for (let i = 0; i < str.length - 1; i++){
        // 다음 인덱스와 값이 같다면 count++
        if(str[i] === str[i+1]) count++
        else {
            //현재 글자 push
            answer += str[i];
            //몇번 반복 됐는지 count push
            if(count>1)answer += count;
            count = 1;
        }
    }
    return answer
}
console.log(StringCompression("aasssasdsssdddww"))
