// 타입 단언

type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; << 에러 (빈 객체를 Person타입으로 정의할 수 없음)
// person.name = "";
// person.age = 23;

// 해결 방법 - as 키워드 + 타입 명시
// 빈 객체를 Person 타입이라고 타입스크립트에게 단언해줌
let person = {} as Person;
person.name = "";
person.age = 23;

// 초과 프로퍼티 검사 - 초기화할 때 객체 리터럴 사용시
type Dog = {
  name: string;
  color: string;
};

let doggy: Dog = {
  name: "돌돌이",
  color: "brown",
  // breed: "진도", - 초과 프로퍼티 검사에서 걸림
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // Dog 타입으로 이 객체를 단언해줌 - 자동으로 dog 객체를 Dog 타입으로 추론까지 해줌

/* 타입 단언의 규칙 
- 값 as 타입 형식의 단언식을 A as B로 표현했을 때 
 1) A가 B의 슈퍼타입이거나 
 2) A가 B의 서브타입이어야 함. 
*/

let num1 = 10 as never; // 가능 - Never 타입은 모든 타입의 서브타입이니까
let num2 = 10 as unknown; // 가능 - unknown 타입은 모든 타입의 슈퍼타입이니까

// let num3 = 10 as string; 에러 - Number와 String 타입은 서로 슈퍼타입/서브타입 관계에 없음

/* 다중 단언 - 왼쪽에서 오른쪽으로 이루어짐 */
let num3 = 10 as unknown as string; // unknown을 끼고 다중단언해주면 단언 안되는 타입으로도 단언해줄 수 있음 - 그치만 좋은 방법 아님 !!

/* const 단언 - const로 선언한것과 동일한 효과 나타남 */
let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨

// cat.name = '' 불가능

/* Non Null 단언  */
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티로 정의 (익명일 수 있으니까)
};

let post1: Post = {
  title: "게시글1",
  author: "안서진",
};

let post: Post = {
  title: "게시글1",
};

// const len1: number = post.author?.length; - 옵셔널 체이닝
// 오류 발생 - number 타입으로 정의한 변수에 undefined 값은 들어갈 수 없으니까
const len2: number = post.author!.length; // ! 붙임으로써 Null이거나 undefined 아닐거라고 말함 - number타입에 값 할당할 수 있게 됨.
