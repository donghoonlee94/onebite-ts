/**
 * map 메서드
 */

const arr = [1, 2, 3];

const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
// parseInt가 return 되는 값의 타입이 U로 전달된다.
map(["1", "2"], (it) => parseInt(it));

map<string, number>(["1", "2"], (it) => parseInt(it));

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["a", "b"], (it) => {
  it;
});
