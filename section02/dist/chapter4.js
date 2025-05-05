// 만든 타입 별칭은 변수의 타입을 정의할 때 타입 주석과 함께 이용할 수 있음
let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
// 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능하지만, 스코프가 다르면 중복된 이름으로 여러 개의 별칭을 선언할 수 있음
function test() {
}
export {};
// 타입 별칭 또한 타입 관련 문법이기 때문에 컴파일 결과 사라짐
