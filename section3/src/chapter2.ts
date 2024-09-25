type Animal = {
    name: string;
    color: string
};

type Dog = {
    name: string;
    color: string;
    breed: string
}

let animal: Animal = {
    name: '기린',
    color: 'yellow'
}

let dog: Dog = {
    name: '독독',
    color: 'brown',
    breed: '진도'
}

animal = dog

// dog = animal


type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book : Book;
let programmingBook : ProgrammingBook = {
    name: '북',
    price: 300000,
    skill: 'js'
}

// 아래는 되고 
book = programmingBook

// 초과 프로퍼티 검사로 인해 아래는 안된다. 
let book2: Book = {
    name: '북',
    price: 300000,
    skill: 'js'    
}

let book3 : Book = programmingBook;

function func(book: Book) {}

// 어래는 불가 
// func({ 
//     name: '북',
//     price: 300000,
//     skill: 'js'    
//  })


// 아래는 가능. 초과 프로퍼티 검사를 하지 않음.
func(programmingBook)