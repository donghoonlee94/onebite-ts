/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 조건부 타입에 유니온 타입을 할당하면 분산적 조건부 타입으로 업그레이드 된다.
// 한번은 number, 한번은 string으로 분리되어서 제너릭에 할당된다.
let c: StringNumberSwitch<number | string>;

c = 123;
c = "string";

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// StringNumberSwitch<boolean> > number
// StringNumberSwitch<number> > string
// StringNumberSwitch<string> > number

// 결과
// number | string

/**
 * 실용적인 예제
 */

// T가 U의 서브타입이라면 never, 아니면 T
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// Result
// number | never | boolean
// number | boolean
// never은 공집합으로 타입에서 제거된다.

type Extract<T, U> = any;

type B = Extract<number | string | boolean, string>;
