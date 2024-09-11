// void

function func1 (): string {
    return 'hello'
}

function func2 (): void {
    console.log('hello')
}

let a: void

// a = 1
// a = 'asdf'
// a = null 
// a = undefined


// never 

function func3 (): never {
    while(true) {}
}

function func4 (): never {
    throw new Error()
}

let b : never;

// b = 1; 
// b = undefined
// b = null 



let num1: 10 = 10
let num2: number = 20 

// upcasting
// O  num2 = num1 

// downcasting
// X  num1 = num2