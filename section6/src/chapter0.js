/**
 * JS CLASS
 */

let studentA = {
  name: "홍길동",
  grade: "A+",
  age: 20,
  study() {
    console.log("홍길동입니다");
  },
  introduce() {
    console.log("HI");
  },
};

class Student {
  // 필드, 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log(`${this.name} 입니다. 열심히 공부 중`);
  }

  introduce() {
    console.log(`HI, ${this.name}-${this.age}-${this.grade}`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 부모 생성자 호출
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 개발함.`);
  }
}

const studentDeveloper = new StudentDeveloper("홍길이", "C+", 21, "TS");
studentDeveloper.programming();
studentDeveloper.introduce();

console.log("studentDeveloper", studentDeveloper);

// let studentB = new Student("홍길서", "B+", 19);

// studentB.study();
// studentB.introduce();
