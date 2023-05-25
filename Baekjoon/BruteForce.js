//자릿수의 합 (자릿수의 합이 최대인 자연수 출력)
function sumOfDigits(n,arr){
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (value of arr){
        let sum = 0,tmp = value;
        //각자리 숫자의 합 구하기
        while(tmp){
            sum+=(tmp%10)
            tmp=Math.floor(tmp/10)
        }
        //각자리 합 구하기 2
        //let sum = value.toString.split('').reduce((a,b)=>a+Number(b),0);
        if(sum >= max) {
            max =sum
            answer = value
        }else if(sum === max){
            if(answer < value){
                answer = value
            }
        }
    }
    return answer;
}
console.log(sumOfDigits(7,[128,230,234,445,324,215]))
