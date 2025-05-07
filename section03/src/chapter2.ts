// unknown 타입

// unknown 타입 변수에는 모든 타입의 값을 할당할 수 있음 - 업캐스팅은 허용이니까
// 다운캐스팅은 불가해서 letnum: number = unknownVar;은 불가
function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown
}

// Never 타입 - 타입 계층도에서 가장 아래에 위치
// 모든 타입의 subtype
// never 타입에는 '아무런 값도 저장할 수 없음!'

function errorFunc(): never {
  throw new Error();

  // never 타입은 모든 타입으로 업캐스팅 가능
  let neverVar: never;

  let a: number = neverVar; // never -> number
  let b: string = neverVar; // never -> string
  let c: boolean = neverVar; // never -> boolean
  let d: null = neverVar; // never -> null
  let e: undefined = neverVar; // never -> undefined
  let f: [] = neverVar; // never -> Array
  let g: {} = neverVar; // never -> Object
} // 이 함수가 값을 반환하는 것 자체가 말이 안될 때 never 사용

// void 타입

// any 타입 - 타입 계층도를 완전히 무시 (치트키)

let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
