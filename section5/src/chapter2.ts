/**
 * 선언 합침
 */

type Person = {
  name: string;
};

// 중복 불가
// type Person = {}

interface IPerson {
  name: string;
}

// 중복 가능, 합침, 라이브러리 같은 경우 타입 보강을 할 때 합칩을 사용함.
interface IPerson {
  // 타입 합침이 될 때 같은 타입이어야 한다. 서브 타입으로 해도 오류가 발생.
  age: number;
}

interface Developer extends IPerson {
  name: "hello";
}

const person: IPerson = {
  name: "",
  age: 1,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
