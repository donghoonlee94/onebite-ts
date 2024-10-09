/**
 * mapped 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// key가 id 일 땐 User['id'], name은 User['name']...
// type PartialUser = {
//   [key in "id" | "name" | "age"]: User[key];
// };

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "홍길동",
    age: 20,
  };
}

const user1 = fetchUser();

user1.id = "123";

function updateUser(user: PartialUser) {
  // 수정
}

// 변경될 값만 보내고 싶지만 파라미터가 User 이므로...
// 이런 상황에서 mapped type 필요
updateUser({
  //   id: 1,
  //   name: "홍길동",
  age: 23,
});
