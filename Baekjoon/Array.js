// 1,2차 배열 탐색
function GreaterThanThePrecedingNumber(arr){
    let answer = [];
    answer.push(arr[0])
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]) answer.push(arr[i])
    }
    return answer
}
console.log(GreaterThanThePrecedingNumber([7,3,9,5,6,12]),"바로 앞 수 보다 큰것만 출력")

// 보이는 학생 앞에 있는 배열들보다 커야 ++ Max값 설정
function VisibleStudent(arr){
    let answer = 0
    let Max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > Max) {
            answer++
            Max = arr[i] // 최대값 변경
        }
    }
}
console.log(VisibleStudent([140,112,150,180,170,170,178]),'보이는 학생');

//가위 바위 보 - 한 쪽 이기는 경우를 기준잡아 경우 나눔
function RockPaperScissors(arr1,arr2){
    let answer = "";
    for (let i = 0; i <=arr1.length; i++){
        //비기는 경우
        if(a[i]===b[i]) answer+="D ";
        //A가 이기는 경우
        else if(a[i]===1 && b[i]===3) answer+="A ";
        else if(a[i]===2 && b[i]===1) answer+="A ";
        else if(a[i]===3 && b[i]===2) answer+="A ";
        //B가 이기는 경우
        else answer+="B ";
    }
}
console.log(RockPaperScissors([1,3,2,2,1],[2,2,1,3,1]))

//연속으로 맞춘 문제
function StreakOfCorrectAnswer (arr){
    let answer;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i]==="1"){
            cnt++
            answer +=cnt
        }else cnt = 0
    }
    return  answer;
}
console.log(StreakOfCorrectAnswer([1,1,0,1,1,0,0,1,0]))

//등수 구하기
function calculatingTheRanking(arr){
    let n = arr.length;
    let answer = Array.from({length:n},()=>1);
    for (let i = 0; i < n; i ++){
        for(j=0; j < n; j ++){
            if(arr[j]>arr[i]) answer[i]++
        }
    }
    return answer;
}
console.log(calculatingTheRanking[87,89,92,100,76])

//2차원 배열 격자판 중 가장 큰 값?
function SumOfTheGridBoard(arr){
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1=0;
    let sum2 =0;
    for(let i = 0; i < arr.length; i++){
        sum1=sum2=0;
        for (let j=0;j<arr.length;j++){
            // i를 고정하고 J값을 변경 -> arr[0][0] , arr[0][1] , arr[0][2] ... 1행의 합
            sum1+=arr[i][j];
            // j를 변경, i를 고정 -> arr[0][0] , arr[1][0] , arr[2][0] , arr[3][0] ... 1열의 합
            sum2+=arr[j][i];
        }
        //행,열의 최대값을 알아낵내기
        answer = Math.max(answer,sum1,sum2)
    }
    sum1=sum2=0;
    // 대각선의 합 구하기
    for (let i = 0; i < arr.length; i++){
        //우하향 대각선의 합
        sum1+=arr[i][i]
        //우사향 대각선의 합
        sum2=arr[i][arr.length - i - 1]
    }
    answer = Math.max(answer,sum1,sum2)
    return answer
}

console.log(SumOfTheGridBoard(
    [[10,13,14,12,15],
    [12,23,34,23,15],
    [12,42,34,23,12],
    [12,32,12,24,23],
    [12,23,12,23,15]]));
