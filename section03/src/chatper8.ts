/* 서로소 유니온 타입
 - 타입 좁히기를 할 때 더 쉽고 직관적으로 타입 좁힐 수 있도록 객체타입을 정의하는 방법
 - 교집합이 없는 타입들로만 만든 유니온 타입 
 - ex. String과 Nmber 타입 : 서로소 집합 
 
 */

type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 타입 좁히기
function login(user: User) {
  if ("kickCount" in user) {
    // Admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if ("point" in user) {
    // Member 타입
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다`);
  } else {
    // Guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
  }
}
// 주석 없이 직관적으로 어느 타입인지 (admin/member/guest) 알아보기 어려움

// 해결 (직관적으로)
type Admin1 = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

/* ADMIN이라는 string literal type과 MEMBER라는 string literal type의 교집합은 없음 (공집합)
 - 따라서, Admin과 Member type간의 교집합이 존재할 수 없음 
 - 이렇게 tag라는 프로퍼티를 각각 만들어준 후, 
  tag 프로퍼티의 타입을 strint literal type으로 다 다르게 정의해주면,
  각각의 객체들이 서로소 집합의 관계를 갖게 됨. 
  따라서 User라는 타입은 서로소 관계에 있는 객체 타입들을 유니온 타입으로 묶었기 때문에 
  서로소 관계라고 볼 수 있음
*/

type Member1 = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest1 = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User1 = Admin1 | Member1 | Guest1;

// 이렇게 작성할 수도 있음 (훨씬 직관적)
// function login1(user: User1) {
//   if (user.tag === "ADMIN") {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//   } else if (user.tag === "MEMBER") {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//   }
// }

// 더 직관적으로 - switch case 문 이용
function login2(user: User1) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}
