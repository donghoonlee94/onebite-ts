/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// 첫번째 값으로 스트링 타입을 전달하여 두번째 값도 스트링 값으로 전달됨.
const [a, b] = swap(1, "a");

/**
 * 두번째 사례
 * 튜플 첫 번째 값은 제너릭, 이후 타입은 사용하지 않는 케이스로 rest parameter & unknown 처리
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "a", "b"]);

/**
 * 세번쨰 사례
 * extends로 T를 length property가 있는 객체로 확장한다.
 * array.length, string.length, object.length...
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("asdf"); // 5
let var3 = getLength({ length: 10 }); // 10
let var4 = getLength(10);
