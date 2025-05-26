// 제네릭 인터페이스 :  인터페이스에 타입 변수를 선언해 사용
interface KeyPair<K, V> {
  key: K;
  value: V;
}
// K, V = 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터

// 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때,
// 반드시 꺽쇠를 열고 타입 변수에 타입을 직접 할당해줘야함

// let keyPair: KeyPair = {
// }; -> 오류

let keyPair: KeyPair<string, number> = {
  // 타입 변수에 할당할 타입을 반드시 지정해줘야함!
  key: "key", // string 타입
  value: 0, // number 타입
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};
// 제네릭 타입 별칭을 사용할 때에도 반드시 타입 변수에 설정할 타입을 명시해주어야 함

// 제네릭 인터페이스 활용 예
// 유저 관리 프로그램 - 학생 유저 & 개발자 유저로 구분

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: Student | Developer;
}

// function goToSchool(user:User){
//   if (user.profile.type !== 'student'){
//     console.log('잘 못 오셨습니다');
//     return;
//   }
// } =>  학생만 할 수 있는 기능이 점점 많아진다고 가정하면 매번 기능을 만들기 위해 함수를 선언할 때 마다 조건문을 이용해 타입을 좁혀야 하기 때문에 결국 매우 불편해 질 것

function goToSchool(user: User<Student>) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "양요섭",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "손동운",
  profile: {
    type: "student",
    school: "서강대학교",
  },
};
