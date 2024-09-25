// 대수 타입 : 여러개의 타입을 합성해서 만들어낸 타입, 합집합 타입과 교집합 타입이 존재


let a : string | number;

let arr: (number | string | boolean)[] = [1, 'hello', true]

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

let union1 : Union1 = {
    name: 'a',
    color: 'b'
}

let union2 : Union1 = {
    name: 'a',
    language: 'b'
}

let union3 : Union1 = {
    name: 'a',
    color: 'b',
    language: 'c'
}

// name만 있으면 에러 발생.
// 한쪽 타입에만 포함되는 객체 or 둘 다 포함하는 객체만 union 타입에 포함된다.
// let union4: Union1 = {
//     name: ''
// }

// 교집합 타입, intersection type

let variable: number & string;


type Dog1 = {
    name: string;
    color: string;
}

type Person1 = {
    name: string;
    language: string;
}

type Intersection = Dog & Person1

let intersection: Intersection = {
    name: 'a',
    color: 'b',
    language: 'c'
}

 // 에러
// let intersection1: Intersection = {
//     name: 'a',
// }