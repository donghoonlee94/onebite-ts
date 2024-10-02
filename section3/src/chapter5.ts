/**
 * 타입 단언 , assertion
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "asdf";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "댕댕",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * A as B
 * A가 B의 슈퍼 타입이거나, A가 B의 서브타입이여야 한다. 호환되는 타입이어야 한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "냐옹",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "글 1",
  author: "훈",
};

const len: number = post.author?.length ?? 0;
