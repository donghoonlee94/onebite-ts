/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// before
// function warning (animal: Animal) {
//     if('isBark' in animal) {
//         // Dob
//     }else if ('isScratch' in animal) {
//         // Cat
//     }
// }

// after
// animal is Dog, Cat은 리턴 값이 true를 반환하면 해당 타입으로 좁히게 됨.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // Dob
    animal;
  } else if (isCat(animal)) {
    // Cat
    animal;
  }
}
