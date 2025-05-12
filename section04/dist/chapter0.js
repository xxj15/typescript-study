// 함수 타입
// 함수를  설명하는 가장 좋은 방법 : 함수가 어떤 타입의 매개변수를 받고 어떤 타입의 값을 반환 하는지
/* 함수 정의 - 함수 선언식 */
function func(a, b) {
    // 반환값은 리턴문 기준으로 자동으로 추론되기 때문에 타입 생략 가능
    return a + b;
}
/* 함수 정의 - 화살표 함수 */
const add = (a, b) => a + b;
// 마찬가지로 반환값은 리턴문 기준으로 자동으로 추론되기 때문에 생략 가능
const add2 = (a, b) => a + b;
/* 매개변수 기본값 설정하기 */
function introduce(name = "이정환") {
    // 기본값 설정되어있으면 기본값 기준으로 타입 추론해줌 - 오류 발생 x
    console.log(`name : ${name}`);
}
//  기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생
//  function introduce(name:number = "이정환") {
// 	console.log(`name : ${name}`);
// }
/* 선택적 매개변수 호출하기
매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략 가능  */
function introduce2(name = "이정환", tall) {
    // tall : number와 undefined의 union 타입으로 추정
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
    // console.log(`tall : ${tall + 10}`);  - 에러 발생 : tall은 number일수도 있고 undefined일수도 있기 때문에
}
introduce2("이정환", 156);
introduce2("이정환");
/* 주의 : 선택적 매개변수는 필수 매개변수 앞에 올 수 없다 (반드시 뒤에 배치) */
// function introduce3(name = "이정환", tall?: number, age: number) { 	 오류!
//   console.log(`name : ${name}`);
//   if (typeof tall === "number") {
//     console.log(`tall : ${tall + 10}`);
//   }
// }
/* rest 파라미터 - rest 매개변수는 함수에 전달한 인수들을 순차적으로 배열에 저장 */
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
console.log(getSum(1, 2, 3));
export {};
