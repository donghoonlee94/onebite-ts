// Array
let numArr: number[] = [1,2,3];

let strArr: string[] = ['hello', 'im', 'ironman']

let booArr: Array<boolean> = [true, false, true]

let multiArr: (number | string)[] = [1, 'hello']

let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]


// 튜플, 길이와 타입이 고정된 배열

let tup1: [number, number] = [1 ,2]

let tup2: [number, string, boolean] = [1, '2', true]

const users: [string, number][] = [
    ['일', 1],
    ['이' ,2],
    ['삼', 3],
    ['사', 4]
]