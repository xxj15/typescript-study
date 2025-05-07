// 대수 타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재함.

// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

// Union 타입으로 배열 타입 정의하기
let arr: (number | string | boolean)[] = [1, "hello", true];

// Union 타입과 객체 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  // Dog와 Person 타입의 모든 프로퍼티 가지고 있음
  name: "",
  color: "",
  language: "",
};

// 에러 발생
// let union4: Union1 = {
//   name : "",
// }

// 2. 교집합 타입 - Intersection 타입
let variable: number & string; // never 타입으로 추론

// 보통 객체 타입에서 Intersection 타입 많이 사용
type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
