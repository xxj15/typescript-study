// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // OK
// num2 = num1; -> NO

// 객체 타입간의 호환성 : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

// 구조적 타입 시스템
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};
// Dog 타입에 해당되면 Animal Type에 무조건 해당됨
// Animal 타입의 Dog 타입의 슈퍼타입

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // OK
// dog = animal; 오류 발생

// 초과 프러퍼티 검사
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", 오류발생 - subtype 넣는건 업캐스팅인데 ??
};

// 초과 프로퍼티 검사 : 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사

let book3: Book = programmingBook; // 이렇게 하면 사용 가능 (초기화할 때 객체 리터럴을 사용한건 아니니까)
// 함수도 마찬가지로 초과 프로퍼티 검사 진행 - 위랑 마찬가지 과정 진행해야함
