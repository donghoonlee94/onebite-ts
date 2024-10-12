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

// 이름은 IPerson 같이 표기하면 헝가리언 표기법이나 JS에서는 잘 쓰지 않음.

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
