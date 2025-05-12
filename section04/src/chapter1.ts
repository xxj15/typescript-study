/* 함수 타입 표현식 (Function Type Expression)
 -> 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있다 */

// 함수 선언 및 구현 코드와 타입 선언을 분리할 수 있어 유용하다
type Operation = (a: number, b: number) => number; // 타입 별칭 이용
// 타입 별칭 : 우항에 있는 (a: number, b: number) => number 를 Operation이라는 이름으로 부르겠다.

const add: Operation = (a, b) => a + b; // 사칙연산 함수들처럼 비슷한 함수들 표현하는데 유리
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 타입별칭 없이도 표현식만으로 타입 정의하는 것도 가능
// type Operation = (a: number, b: number) => number;
// const add: Operation = (a, b) => a + b;
// 타입 부분 (Operation)에 (a: number, b: number) => number; 넣기

const adding: (a: number, b: number) => number = (a, b) => a + b;

/* 호출 시그니쳐 (Call Signature) 
- 함수 타입 표현식과 동일하게 함수의 타입을 분리해서 별도로 정의하는 방식 */
type Operation2 = {
  (a: number, b: number): number; // JS 함수도 객체이기 때문에 이렇게 객체처럼 정의
  name: string; // 프로퍼티 추가 정의 가능 -> 하이브리드 타입
}; // 타입 정의

// 일반적으로 함수 정의
// function func(a:number): void {}
// (a:number): void 이 부분 딱 떼서 옮기면 - Call Signature

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name; // 객체로도 사용하고 함수로도 사용 가능
