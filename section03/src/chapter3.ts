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
