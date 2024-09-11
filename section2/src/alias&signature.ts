
type User  = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string
}

function func () {
    type User = {}
}

let user: User = {
    id: 1,
    name: '홍길동',
    nickname: 'asdf',
    birth: '1999-12-30',
    bio: 'hi',
    location: '서울'
}


// index signature

type CountryCodes = {
    [key: string]: string
}

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
}