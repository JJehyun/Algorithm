//sort 사용하지 않고 정렬하기
function Sort(a,b,c){
    let answer;
    if(a<b) answer = a
    else answer = b
    if(answer > c) answer = c
    return answer
}
console.log(Sort(4,5,6))

//삼각형 판별하기 a + b > c
function Triangle(){
    let answer, max
    let sum = a + b + c;
    if(a > b) max = a;
        else max = b;
    if(max < c) max = c;
    return (sum-max)<=max ? 'YES' : 'NO'

}
console.log(Triangle(), '삼각형 판별하기')

//Sort 사용X 최솟값 구하기
function Minimum(arr){
    let answer, min= Number.MAX_SAFE_INTEGER;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] < min) min = arr[i]
    }
    return min
}
console.log(Minimum([1,2,3,4,5]) , '최솟값')

//홀수 문제 (총합, 홀 수들의 합 구하기)
function Odd(){
    let answer=[];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr){
        if(x % 2 === 1){
            sum += x;
            if(x < min) min = x;
        }
    }
    answer.push(sum)
    answer.push(x)
    return answer
}
console.log(Odd([]),'홀 수 구하기')

//10부제
function Subtitles(day,arr){
    let answer = 0;
    for (let x of arr){
        if(x%10) answer++
    }
    return answer
}
console.log(Subtitles(3,[25,12,23,15,6]))

//일곱 난쟁이 , 아홉 난쟁이
function Dwarf(arr){
    let answer = arr;
    let sum = arr.reduce((sum,value) => value+sum,0);
    for (let i = 0; i < 8; i++){
        for (let j = i + 1; j < 9;j++){
            if((sum-arr[i]+arr[j])===100){
                //splice는 제거 후 배열의 길이가 작아져서 뒤에 것을 제거
                answer.splice(j,1)
                answer.splice(i,1)
            }
        }
    }
    return answer
}
console.log(Dwarf([20,7,23,19,10,8,13]))
//A를 #으로 (문자열 탐색)
function Conversion(str){
    let answer = ""
    for ( x of str) {
        if(x === "A") answer += "#"
        answer += x
    }
    return answer
}
console.log(Conversion("banana"))

//문자 찾기 문제 , 몇개
function Findchar(string,Char){
    let answer=string.split(Char).length;
    return answer
}
console.log(Findchar("ABCDEFGABCDEF","A"))

//아스키 코드값, 대문자 판별
function ToUpperCase(str){
    let answer = "";
    for (x of str){
        let num = x.charCodeAt();
        if(num >= 65 && num <= 90) answer++
        //if(x === x.toUpperCase()) answer++
    }
    return answer
}
console.log(ToUpperCase("AsDsdQdfdR"));

//대문자로 통일하기 아스키 코드 이용
function ToUpperCase2(str){
    let answer = "";
    for(value of str){
        if(value===value.toUpperCase()) answer += value.toUpperCase();
        else answer +=value;
        // 다른 풀이 아스키 코드 이용
        for(value of str){
            let num = value.charCode();
            if(num>= 97 && num <= 122) answer+=String.fromCharCode(num-32)
            else answer+=value;
        }
    }
    return answer
}
console.log(ToUpperCase2("AsdSsdasEssdS"))