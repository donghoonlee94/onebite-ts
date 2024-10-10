/**
 * infer
 * 추론
 */

type FuncA = () => string;

type FuncB = () => number;

type FuncC = (a: any) => boolean;

type FuncD = () => void;

// 서브타입이 맞으면 R을 추론한다.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<FuncC>;

type D = ReturnType<FuncD>;

type E = ReturnType<number>;

/**
 * 예제
 */

// T > Promise로 서브타입 조건 충족
// Promise가 반환하는 값을 추론하라 -> infer R
// 추론하는 값이 있다면, R을 반환하고, 아니면 never를 반환해라.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 조건 :
// 1. T는 프로미스 타입이어야 한다
// 2. 프로미스 타입의 결과갑 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string

type PromiseC = PromiseUnpack<Promise<() => void>>;

type PromiseD = PromiseUnpack<string>;
