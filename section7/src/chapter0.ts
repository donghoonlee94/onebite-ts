/**
 * 제네릭
 */

// <T> 타입 변수, 타입을 저장하는 변수
function func<T>(value: T): T {
  return value;
}

// (value: T)의 T에 할당하는 방식
let num = func(10);

let bool = func(true);

// let arr = func([1, 2, 3] as [number, number, number]);

// <T>에 할당하는 방식
let arr = func<[number, number, number]>([1, 2, 3]);

let str = func<string>("str");
