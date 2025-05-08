// 타입 추론 - TS는 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론한다.

let a = 10; // number 타입으로 추론

// 함수의 매개변수 타입은 자동으로 추론하지 못함
// function func(param){

// }

// 1. 변수 선언 - 일반적인 변수 선언의 경우 초기값을 기준으로 타입이 잘 추론됨

let num = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
}; // id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// 2. 구조 분해 할당 - 객체와 배열을 구조 분해 할당하는 상황에서도 타입이 잘 추론됨
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 3. 함수의 반환값 - 함수 반환값의 타입은 return 문을 기준으로 잘 추론됨
function func() {
  return "hello";
} // 반환값이 string 타입으로 추론됨 - return 문 뒤에 오는 반환값 기준으로 추론함

// 4. 기본값이 설정된 매개변수
function func2(message = "hello") {
  return "hello";
}

// 주의사항
// 1. 암시적으로 any 타입으로 추론 (초기값이 없는 경우)
// 변수 선언 시 초기값을 생략하면 암시적인 any 타입으로 추론된.
let d;
d = 10; // 이때부터 d가 number 타입으로 추론됨
d.toFixed();
// d.toUpperCase(); 오류 (마치 d가 number case로 바뀐 것처럼)

d = "Hello"; // 이렇게 다시 넣어도 문제되지 않는다 - 이때부터 d를 string으로 추론
d.toUpperCase(); // 사용 가능
// 'any타입의 진화' 라고 부름 - 암묵적 any 타입으로 추론
// let d: any; << 이건 계속 any타입

// 2. const 상수의 추론
const num2 = 10; // 10 'Number Literal' 타입으로 추론
let num3 = 10; // number 타입으로 추론

const str = "hello"; // "hello" String Literal 타입으로 추론

// Best Common Type (최적 공통 타입)
// 다양한 타입의 요소를 담은 배열을 변수의 초기값으로 설정하면, 최적의 공통 타입으로 추론됨
let arr = [1, "string"]; // (string | number)[] 타입으로 추론

