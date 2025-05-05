// void : 아무런 값도 없음
// 보통 아무런 값도 반환하지 않는 함수의 반환값 타입 정의할 때 사용

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// a = null; <- 불가

// never: 불가능
// 1. 의도적으로 오류 발생시키는 함수
function func3(): never {
  throw new Error();
}

// 2. 무한루프
function func4(): never {
  while (true) {}
}

// 3. 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됨
