/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

const varA: StringNumberSwitch<number> = "a";

const varB: StringNumberSwitch<string> = 1;

// 함수 내부에서는 조건부 타입이 어떻게 될지 알수가 없음.
// function removeSpaces<T>(text: T) 이렇게 사용할 경우 반환 값에서는 string | undefined로 추론하기 때문에 에러 발생,.
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: T) {
  // 오버로딩을 하지 않을 경우 T가 제네릭임을 알고 있지만 T가 어떤 값이 들어올지는 모르기 때문에 에러가 발생한다.
  // 그렇기에 typeof string을 체크해도 text.replaceAll 값이 string을 반환한다는 것을 보장하지 못한다.
  // 한마디로, TS는 T가 string이 아닐 가능성이 있다고 판단하므로.
  //  타입스크립트는 T가 string이 아닐 수도 있는 경우를 대비하기 때문에 에러를 발생시킨다.
  //  typeof 체크로 런타임에서 타입을 좁히더라도, 제네릭 타입 T의 타입 안전성을 고려하여 타입스크립트는 이를 정확하게 반환 타입과 일치시킬 수 없다고 판단한다.
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

// 오버로딩 시그니처는 호출부의 전달된 파라미터 타입에 맞춰 결정된다.
let result = removeSpaces("hi im winterload");
result.toUpperCase();

let result2 = removeSpaces(undefined);

// string이 아니므로 첫 번째 시그니처의 반환 타입은 undefined가 될 것이라 추론된다.
let result3 = removeSpaces(123);
