/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드

  // 생성자에 접근제어자를 달면 필드를 자동으로 추가해줌
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 접근제어자 사용시 자동으로 할당이 됨.
  }

  work(): void {
    console.log("work");
  }
}

class ExecutiveOfficer extends Employee {
  protected officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // 파생클래스에서도 private 접근 불가
    // this.name

    // 파생클래스에서까지는 허용 가능
    this.age;
  }
}

const employee = new Employee("홍길자", 20, "developer");
// private으로 접근 불가
// employee.name = "홍길동";
// protected으로 접근 불가
// employee.age = 30;
// employee.position = "디자이너";

console.log(employee);
