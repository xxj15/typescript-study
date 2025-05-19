// 인터페이스 합치기
// 선언 합침 (Declaration Merging)

// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능

// type Person = {
//   name: string;
// };

// type Person = { ❌
//   age: number;
// };

// 인터페이스는 가능한 이유 : 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 결국 이런 형태가 됨
// interface Person {
//   name: string;
//   age: number;
// }

// 충돌은 허용되지 않음
// interface Person {
//   name: string;
// }

// interface Person {
//   name: number;
//   age: number;
// }

// 실질적으로 사용하는 경우 - 모듈 보강

interface lib {
  a: number;
  b: number;
}

interface lib {
  c: string; // 모듈의 타입을 보강해줌
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
