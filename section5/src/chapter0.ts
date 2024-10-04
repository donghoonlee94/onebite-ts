/**
 * 인터페이스
 */

// 오버로드는 호출 시그니쳐 사용
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Func = {
//   (): void;
// };

// const func: Func = () => {};

// type은 interface와 확장하는 법이 다르다.
type Type1 = number | string;
type Type2 = number & string;
type Type3 = number | string | Person;

const person: Person | number = {
  name: "홍길동",
  age: 20,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
