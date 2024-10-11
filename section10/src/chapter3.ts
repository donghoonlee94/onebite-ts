/**
 * Exclude<T,U>
 * > T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;

// Exclude<string, boolean> T
// Exclude<boolean, boolean> never

// string | never

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * T 에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

// Extract<string, boolean> never
// Extract<boolean, boolean> boolean

// never | boolean

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * 함수의 반환갑 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 1;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;
