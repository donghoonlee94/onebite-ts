// 타입 추론

// 타입 넓히기, 10으로 선언했지만 number, string 등으로 추론하여 타입을 잡는다. 
let a = 10;
let b = 'hello'
let c = {
    id: 1,
    name: 'a',
    profile: {
        nick: 'b'
    },
    urls: ['asdf']
}

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true]

function func (msg = 'm') {
    return 'asdf'
}

// any 타입의 진화
let d ; 
d = 10;

/// any > number

d.toFixed()

// number > string

d = 'a'

d.toUpperCase()

// d.toFixed() > error


const num = 10;
const str = 'abcd'

let arr = [1, 'string', { id: 1, name: 'name' }]

const arr1 = [1, 'string']