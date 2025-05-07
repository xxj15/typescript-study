// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0 할당(자동)
  USER, // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

const user1 = {
  name: "카리나",
  role: Role.ADMIN, // 0
};

const user2 = {
  name: "윈터",
  role: Role.USER, // 1
};

const user3 = {
  name: "닝닝",
  role: Role.GUEST, // 2
};

// 문자열 열거형
enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "지젤",
  language: Language.korean, // "ko"
};

// enum은 컴파일 결과 객체가 된다 