// enum 타입 
// 열거형 타입 


// 0 관리자 1 일반 2 게스트

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    korean = 'ko',
    english = 'en'
 }

const user1 = {
    name: '홍길동',
    role: Role.ADMIN,
    language: Language.english
}

const user2 = {
    name: '홍길동',
    role: Role.USER,
    language: Language.korean
}

const user3 = {
    name: '홍길동',
    role: Role.GUEST,
    language: Language.english
}

console.log(user1, user2, user3)



