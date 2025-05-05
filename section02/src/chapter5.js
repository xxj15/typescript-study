// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: "카리나",
    role: Role.ADMIN, // 0
};
var user2 = {
    name: "윈터",
    role: Role.USER, // 1
};
var user3 = {
    name: "닝닝",
    role: Role.GUEST, // 2
};
// 문자열 열거형
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
var user4 = {
    name: "지젤",
    language: Language.korean, // "ko"
};
