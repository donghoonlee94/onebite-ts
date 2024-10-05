/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

// extends는 type 객체도 가능.
interface Dog extends Animal {
  // 상속된 타입을 재정의 할 수 있다. 상속받은 타입의 서브 타입이어야 함. 슈퍼타입을 지켜야 한다.
  isBark: boolean;
}

const dog: Dog = {
  name: "dog",
  age: 2,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "dog",
  age: 1,
  isBark: true,
  isScratch: true,
};
