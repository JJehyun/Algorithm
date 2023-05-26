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

//소수판별
function isPrime(num){
    if(num===1) return false
    for (let i = 2; i <=parseInt(Math.sqrt(num));i++){
        if(num%i === 0) return false
    }
}
//뒤집은 소수
function reversedPrime(arr){
    let answer = [];
    for (let x of arr){
        let res = 0;
        while(x){
            let t = x % 10;
            res=res*10+t;
            x = parseInt(x/10);
        }
        //문자열 뒤집기 while문 대신 사용
        //let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)) answer.push(res)
    }
    return answer
}
console.log(reversedPrime([23,44,32,55,12,56,12,33]))

// 멘토링
function Mentoring(arr){
    let answer = 0,tmp=[];
    m = arr.length;
    n = arr[0].length;
    for (let i = 1; i <=n; i++){
        for(let j = 1; j <= n; j++){
            let cnt = 0;
            for(let k = 0; k<m; k++){
                let pi=pj=0;
                for(let s = 0; s < n; s++){
                    if(arr[k][s] === i)pi = s;
                    if(arr[k][s] === j)pj = s;
                }
                if(cnt === m) answer++
            }
        }
        return answer
    }
}
console.log(Mentoring([[3,4,1,2],[4,3,2,1,],[3,1,4,2]]))

// 졸업선물
function graduationGift(m,product){
    let answer = 0;
    //인원 수
    n = product.length;
    //[a,b] a+b 오름차순
    product.sort((a,b) => (a[0]+a[1])-(b[0]+b[1]))
    for(let i = 0; i < n; i++){
        let money= m - (product[i][0]/2+product[i][1])
        let cnt= 1
        for(let j = 0; j < n; j++){
            if(j!==i && (product[j][0]+product[j][1]>money)) break;
            if(j!==i && (product[j][0]+product[j][1])<money){
                money-=(product[j][0] + product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer,cnt);
    }
    return answer;
}
console.log(graduationGift(28,[[6,6],[2,2],[4,3],[4,5],[10,3]]))

//K 번째 큰 수 (n카드 몇장, k번째로 큰 수, card 배열)
function KthLargestNumber(n,k,card){
    let answer;
    //중복을 제거해주는 자료구조
    let tmp = new Set();
    //첫번째 카드 선택
    for(let i = 0;i<n-2;i++){
        for (let j = i + 1; j < n-1;j++){
            for(let k = j+1; k < n; k++){
                //set자료 구조에 값 삽입
                tmp.add(card[i]+card[j]+card[k])
            }
        }
    }
    let a = Array.from(tmp).sort((a,b)=>b-a);
    answer=a[k-1];
    return answer
}
console.log(KthLargestNumber(10,3,[12,23,12,34,12,23,43,12,34,34]))
