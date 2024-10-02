/**
 * 타입 좁히기, 타입 가드
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.age}은 ${value.age}살 입니다`);
  }
  // 타입이기 떄문에 아래와 같이 사용 불가
  //   else if (value instanceof Person) {

  //   }
}
