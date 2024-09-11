/**
 * Unknown 
 */

function unknownExam () {
    let a : unknown = 1;
    let b : unknown = 'hello'
    let c : unknown = true;
    let d : unknown = null;

    let unknownVar: unknown

    // let num:number = unknownVar
    // let str:string = unknownVar
    // let boo:boolean = unknownVar
}


/**
 * Never
 */

function neverExam () {
    function neverFunc(): never {
        while(true) {}
    }   

    let num: number = neverFunc();
    let str: string = neverFunc();

    // let never1: never = 10
    // let never2: never = 'asdf'
    // let never3: never = true
}

/**
 * Void
 */

function voidExam () {
    function voidFunc(): void {
        console.log('asdf')
    } 


    let voidVar: void = undefined
    // let voidVar1: void = any
    // let voidVar2: void = 1 
}

/**
 * Any (cheat)
 */

function anyExam() {
    let unknownVar: unknown
    let anyVar: any
    let undefinedVar : undefined
    let neverVar : never

    anyVar = unknownVar // downcast 가능 
    undefinedVar = anyVar // downcast 가능 
    // neverVar = anyVar // 불가
}