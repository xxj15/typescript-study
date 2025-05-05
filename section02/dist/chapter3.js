// 객체 생성 - 잘못된 방법
// let user: object = {
//   id: 1,
//   name: "이정환",
// };
// user.id;
// 객체 리터럴 - 객체의 타입을 정의할 때에는 object 보다는 객체 리터럴 타입을 사용하는게 좋음
let user = {
    id: 1,
    name: "이정환",
};
user.id;
// 구조적 타입 시스템 (= Property Based Type System)
// 객체의 타입을 정의할 때 단순히 object라는 이름으로 정의하는 것이 아니라, 객체의 구조를 기준으로 타입을 정의!
let dog = {
    name: "돌돌이",
    color: "brown",
};
// 선택적 프로퍼티 (optional property)
let myUser = {
    id: 1,
    name: "이정환",
};
myUser = {
    name: "홍길동",
};
// 읽기 전용 프로퍼티 (Readonly Property)
let myUser2 = {
    id: 1,
    name: "이정환",
};
export {};
// myUser2.name = "dskfd"; <- 오류 발생
