// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법
// 오직 TS에서만 지원 (JS에서는 지원x)

// 1. 함수에 어떤 버전들이 있는지 알려줘야함
// 버전들 -> 오버로드 시그니쳐 (구현부 없이 선언식만 나타낸 것)
// 오버로드 시그니처를 통해 func 함수에 이렇게 두 가지 버전 있다는 것을 알려줌
function func(a: number): void;
function func(a: number, b: number, c: number): void; // 구현부 없이 이렇게만 선언

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// 실제 함수들은 오버로드 시그니쳐 함수에 따라감
// func();
func(1);
// func(1,2);
func(1, 2, 3);
