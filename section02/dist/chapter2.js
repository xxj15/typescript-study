// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열 타입 정의하기
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플 : 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
tup1.pop(); // 배열 메서드 사용하면 길이제한 없어서 이 경우에도 어떤 에러도 안뜬다
// 튜플 쓰면 좋은 경우 - 이런 실수 빨리 잡을 수 있음
const users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "조아무개"], <- 오류 발생
];
export {};
