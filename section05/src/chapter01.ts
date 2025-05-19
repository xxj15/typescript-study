// 인터페이스 확장
// 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법
// 특정 인터페이스를 기반으로 여러개의 인터페이스가 파생되는 경우 중복 코드가 발생하는 경우 인터페이스의 확장 기능 사용하면 좋음

interface Animal {
  name: string;
  color: string;
}

// 확장 (상속) 이라고 부름/
interface Dog extends Animal {
  // 인터페이스 Dog는 인터페이스 Animal을 확장
  isBark: Boolean;
}

const dog: Dog = {
  // 1. 확장받는 타입에서 프로퍼티의 타입을 재정의 할 수 있음.
  // name: "hello",
  name: "",
  color: "",
  isBark: true,
};

// 2. 인터페이스는 객체 타입이면 확장받을 수 있다.
// 인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장할 수 있음
interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string; - name, age - 중복된 프로퍼티 정의 많음
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
