/* 
타입 좁히기 
 : 조건문 등을 이용해서 넓은 타입에서 좁은 타입으로 
   상황에 따라 타입을 좁하는 방법. 
 */

// value => number: toFixed
// value => string : toUpperCase
function func(value: number | string) {
  // 조건문 밖에서는 value.toUpperCase()나 value.toFixed() 사용 불가
  if (typeof value === "number") {
    console.log(value.toFixed()); // value 타입이 Number로 추론됨
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value 타입이 string으로 추론됨
  }
}

/*
1. 타입 좁히기 :  조건문 내부에서 변수가 특정 타입임을 보장하면 해당 조건문 내부에서는 변수의 타입이 보장된 타입으로 좁혀짐
2. 타입 가드 :  if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 표현들
*/

// instanceof 타입가드  - 우리가 만든 타입에 사용 불가
function func1(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof : 왼쪽 객체가 Date 객체인지 ?! - Date객체로 타입 보장
    console.log(value.getTime());
  }
}

function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "object") {
    // console.log(value.getTime());
    // 에러 발생 - JS 에서 typeof 연산자는 null값에 typeof해도 object 반환하기 때문
  }
  // else if (value instance of Person){
  // } 불가능! -> 이럴 때 in 연산자 사용
}

// in 타입가드 - 우리가 직접 만든 타입과 함께 사용 가능
type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value가 null 이 아님을 명시해줘야함
    console.log(`${value.name}은 ${value.age}살 입니다`); // value의 타입을 person 타입으로 보장 가능
  }
}
