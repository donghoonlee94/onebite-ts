// enum 타입 
// 열거형 타입 
// 0 관리자 1 일반 2 게스트
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: '홍길동',
    role: Role.ADMIN,
};
var user2 = {
    name: '홍길동',
    role: Role.USER,
};
var user3 = {
    name: '홍길동',
    role: Role.GUEST,
};
console.log(user1, user2, user3);
