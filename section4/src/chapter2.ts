/**
 * 함수 타입 호환성
 * 특정 합수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환 값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 100;
let b: B = () => 10;

// 10을 number로 취급하는 것이므로 업캐스팅이라 가능함.
// A는 number 타입으로 리터럴보다 큰 타입인데 number 타입을 리터럴로 변경하려고 하고 있음.
a = b;

// 다운캐스팅 불가, number를 10 이라는 넘버 리터럴로 바꾸려고 하고 있음. 할당 받는 쪽이 아닌 할당이 되는 값을 봐야함.
b = a;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 매개변수는 반공변성으로 일반적인 타입으로 취급하지 않는다.

// 매개변수를 number로 받는 c 타입에 d 같이 number literal의 10을 할당하면
// c는 어떤 값이든 (1,2,3 등등) 받아야 하나 10외에 값을 처리할 수 없게 되므로 에러가 발생함.

// 반대로 d에 c를 할당하는 것은 d는 10이라는 리터럴 값이지만 c는 어떤 값이든 받을 수 있는 상태에서 10이라는 값만 처리하면 되기 때문에 에러가 발생하지 않음.

// 공변성 : 업캐스팅과 연결된다. 반환 타입에 관련되며 하위 타입을 상위 타입으로 안전하게 반환할 수 있는 경우
// 반공변성 : 매개변수 타입에 관련된다. 상위 타입을 하위 타입으로 안전하게 변환할 수 있는 경우.

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c 입장: d ? 난 1,2,3이든 다 받을 수 있는데 10만 받으라고? 안돼 돌아가.
// b 입장: c ? 난 10만 허용할건데 1,2,3 다 받으라고? 근데 거기서 10만 처리하면 난 상관없어.
// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color)
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때, 타입이 같고 매개변수가 더 적을 때만 호환이 가능.

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// 개수가 적기 때문에 불가능.
// func2 = func1;
