// any : 타입 검사를 받지 않는 특수한 치트키 타입

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// Unknown : 오직 값을 저장하는 행위밖에 할 수 없음

// 변수의 타입으로 정의되면 모든 값을 할당받을 수 O
// 반대로 그 어떤 타입의 변수에도 할당 X
//  모든 연산에 참가할 수 X

// 특정 변수가 어떤 값을 받게 될지 모른다면 any 타입보다는 unknown타입 이용하는 것이 안전
