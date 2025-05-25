// 제네릭
// 함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어 주는 타입스크립트의 기능

function func(value: any) {
  return value; // func 함수에서는 반환값 : any타입으로 잡힙
}

let num = func(10);
// any 타입으로 추론됨
num.toUpperCase(); // 오류 감지 x

let bool = func(true);
// any 타입으로 추론된

let str = func("string");
// any 타입으로 추론됨

// 제네릭 함수 이용하면 - 함수의 인수에 따라서 반환값의 타입을 가변적으로 정할 수 있음

// 제네릭 : 일반적인/포괄적인
// 제네릭 함수 : 일반적인 (포괄적인) 함수
// 두루두루 모든 타입의 값을 다 적용할 수 있는 범용적인 함수

// 제네릭 함수 선언하기
// 1. 타입 변수 선언 - 함수 이름 뒤에 꺾쇠를 열고 타입을 담는 변수인 타입변수 T를 선언한다
function func1<T>(value: T): T {
  // T : 타입 변수
  return value;
}

let num1 = func1(10);
// number 타입으로 추론 - 인수에 따라 추론됨

let str1 = func1("string");

let arr = func1([1, 2, 3]); // number[] 으로 추론됨

let arr1 = func1<[number, number, number]>([1, 2, 3]); // 타입이 [number, number, number]로 추론됨 (튜플)

// let arr1 = func1<[number, number, number]>([1, 2, 3,4]);

let arr2 = func1([1, 2, 3, 4]);
