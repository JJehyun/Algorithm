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

// (x행,y열)
console.log(SumOfTheGridBoard(
    [[10,13,14,12,15],
        [12,23,34,23,15],
        [12,42,34,23,12],
        [12,32,12,24,23],
        [12,23,12,23,15]]));


// 봉우리 문제
function Peak(arr){
    let answer = 0;
    let n = arr.length;
    //현재 위치의 위,아래를 확인하기 위한 화살표 변수
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k=0; k<4;k++){
                let flag = 1;
                //4방향을 보기 위한 for문
                //상하좌우보기 위함
                let nx = i + dx[k]
                let ny = i + dy[k]
                //현재 위치 arr[i][j]
                //arr[nx][ny] 현재 위치를 기준으로 상하좌우값
                //nx>=0 && nx<n && ny>=0 && ny<n &&   ---->  마이너스 인덱스가 되지 않기 위한 값
                if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] >= arr[i][j]) {
                    flag = 0;
                    break;
                }
                //봉우리가 상하좌우 보다 컸다면, answer 증가
                if(flag) answer++;
            }
        }
    }
    return answer
}
console.log(Peak([
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2]]))
