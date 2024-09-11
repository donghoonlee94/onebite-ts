// any

let anyVar: any = 10

anyVar = 'asdf'

let num: number = 10

num = anyVar

// unknown

let unknownVar : unknown

unknownVar = "" 
unknownVar = 1;
unknownVar = () => {}

// 타입 정제
if(typeof unknownVar === 'number') {
    num = unknownVar
}