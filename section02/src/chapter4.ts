// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 만든 타입 별칭은 변수의 타입을 정의할 때 타입 주석과 함께 이용할 수 있음
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능하지만, 스코프가 다르면 중복된 이름으로 여러 개의 별칭을 선언할 수 있음
function test() {
  type User = string;
}

// 타입 별칭 또한 타입 관련 문법이기 때문에 컴파일 결과 사라짐

// 인덱스 시그니처 - 객체 타입을 유연하게 정의할 수 있도록 돕는 특수 문법
// 타입 별칭
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // (... 약 100개의 국가)
  Brazil: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};

// 인덱스 시그니처를 이용해 간단하게 타입 정의 가능
type CountryCodes1 = {
  [key: string]: string;
  Korea: string; // 반드시 포함해야 하는 프로퍼티가 있다면 직접 명시할 수 있음. (단, Korea: number;은 오류)
};
// key와 value의 규칙을 바탕으로 타입 정의

let countryCodes1: CountryCodes1 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil: "bz",
};
