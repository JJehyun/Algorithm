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
