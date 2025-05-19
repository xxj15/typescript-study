// 인터페이스 : 타입에 이름을 지어주는 또 다른 문법
// 객체의 구조를 정의하는 데 특화됨 - 상속, 합침 등 특수한 기능 제공

interface Person {
  readonly name: string;
  age?: number;
  sayHi?: () => void; // 메서드 타입 정의 가능 & 선택적 프로퍼티도 가능
  // sayHi(): void; - 호출 시그니처 이용도 가능
}

// 변수 정의  - 타입 별칭과 동일하게 변수 타입 정의 가능
const person: Person = {
  name: "이정환",
  age: 27,
};

// 메서드 오버로딩도 가능
// 호출 시그니처 이용해야함
interface Person2 {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // sayHi: (a: number, b: number) => void; // ❌
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}

// 주의할 점 - Union이나 Intersection 타입 정의 불가

/*
type Type1 = number | string;
type Type2 = number & string;

interface Person {
  name: string;
  age: number;
} | number 
 */
