/* 함수 타입의 호환성 
- 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단 

아래 2가지 기준으로 함수 타입의 호환성을 판단
 - 두 함수의 반환값 타입이 호환되는가?
 - 두 함수의 매개변수의 타입이 호환되는가?
*/

// 기준1. 반환값 타입이 호환되는가 ?
// A와 B 함수 타입이 있다고 가정할 때 A 반환값 타입이 B 반환값 타입의 슈퍼타입이라면 두 타입은 호환됨.
type A = () => number;
type B = () => 10;

let a: A = () => 10; // A 타입의 함수는 number 타입 반환해야함
let b: B = () => 10; // B 타입의 함수는 number literal 타입 '10'을 반환해야함

a = b; // 업캐스팅이여서 허용
// b = a; -> b = a라는건 타입 A의 값을 타입 B에 넣겠다는 것과 같은 의미
// 타입 B (넘버 리터럴 타입) <- 타입 A (넘버 타입) 반환값 사이에서 다운캐스팅 불허

// 반환값 사이에서는 업캐스팅하는 상황이라면 허용, 다운캐스팅은 불허!

// 기준2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
// 매개변수의 개수도 같고 타입도 같다면 - 양쪽으로 호환 가능
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 에러
// 변수 c = 변수 d
// D 타입을 C 타입으로 취급하겠다는 뜻.
// number literal 타입을 Number 타입으로 취급 - 업캐스팅
// 매개변수 타입 기준으로 호환성 판단할 때에는 업캐스팅일때는 호환되지 않는다고 판단

d = c; // 다운캐스팅 허용

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; - animalFunc의 매개변수 타입이 dogFunc 보다 큼
// animalFunc에 dogFunc넣는다는것은
//  animal 타입에는 color라는 프로퍼티 없으니까
// let animalFunc = (animal: Animal) => {
//   console.log(animal.name);  // ✅
//   console.log(animal.color); // ❌
// };

dogFunc = animalFunc; // ✅
// dogFunc에 animalFunc 넣는 것
let testFunc = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1의 매개변수 더 많음 - 가능
// func2 = func1;  할당하려고 하는 쪽의 함수의 타입의 매개변수 개수 더 적을때만 호환
