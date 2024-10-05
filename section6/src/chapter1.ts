/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "홍길동",
  age: 20,
  position: "developer",
  work() {
    console.log("work");
  },
};

// TS에서는 class가 타입으로도 적용이 가능함.
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(): void {
    console.log("work");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("홍길동", 20, "developer");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

const executiveOfficerB = new ExecutiveOfficer("임원", 40, "executive", 1001);
console.log(executiveOfficerB);
