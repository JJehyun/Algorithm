//투 포인터 알고리즘
function MergeTwoArrays(arr1,arr2){
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    //포인터 초기화
    let p1=p2=0
    //포인터가 배열의 길이보다 작을 때만 반복문 실행
    while (p1<n && p2<m){
        if(arr1[p1]>=arr2[p2]) answer.push(arr2[p2++]);
        else answer.push(arr1[p1++]);
    }
    //arr1배열이 남아있을때
    while (p1<n) answer.push(arr1[p1++]);
    //arr2배열이 남아있을때
    while (p2<m) answer.push(arr2[p2++]);

    return answer
}
console.log(MergeTwoArrays([1,3,5],[2,3,6,7,9]))

// 공통 원소 구하기
function FindCommonElements(arr1,arr2){
    let answer = [];
    //오름차순 정렬
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    //포인터 초기화
    let p1 = p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length){
        //공통원소를 찾았을 때
        if(arr1[p1] === arr2[p2]) {
            answer.push(arr2[p2++]);
            arr1++;
        }
        else if(arr1[p1] < arr2[p2]) p1++;
        else p2++
    }
    return answer;
}
console.log(FindCommonElements([1,3,10,5,2],[3,2,5,7,8]))
