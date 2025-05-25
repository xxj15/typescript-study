// 타입 변수 응용하기

// 1. 타입 변수가 두 개 필요한 경우
function swap<T, U>(a: T, b: U) {
  // 타입 변수 두 개 적어줄 것
  return [b, a]; // b:U, a : T
}

const [a, b] = swap("1", 2);

// 2. 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 하는 경우
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// str : number

let str = returnFirstValue([1, "hello", "mynameis"]);
//  반환값 (data[0]): number | string으로 추론됨

// 3. 반환값의 타입을 배열의 첫 번째 요소의 타입이 되도록 하기 위한 경우
// 튜플 타입과 나머지 파라미터를 이용
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]);
// number

// 4. 타입 변수 제한 - 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한 두기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
// interface 확장이랑 같은 의미 -
// T : 타입이 number인 length 프로퍼티를 무조건 가지고 있는 객체를 확장하는 타입
// 무조건 length라는 프로퍼티를 가지고 있는 타입 !!

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10 - 일반 객체인데 length 프로퍼티 가지고 있으니까 가능

//getLength(undefined);

//getLength(null);
