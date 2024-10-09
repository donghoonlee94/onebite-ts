/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

type Person = typeof person;

// keyof : 키 값을 유니온으로 추출함. 'name' | 'age'
// 타입에만 사용 가능함.
// 일반 변수로 사용하려면 typeof를 같이 사용할 수 있음.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "홍길동",
  age: 20,
  location: "seoul",
};

getPropertyKey(person, "name");
