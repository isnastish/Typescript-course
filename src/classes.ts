abstract class Department {
  private id: number;
  private name: string;
  private employees: string[] = [];

  constructor(name: string, id: number) {
    console.log("ctor()");
    this.name = name;
    this.id = id;
  }

  abstract displayDepartment(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployees(this: Department): string[] {
    return this.employees;
  }
}

class ITDepartment extends Department {
  private admins: string[];

  constructor(id: number, admins: string[]) {
    console.log();

    // NOTE: super has to be called before any manipulation on this keyword
    super("IT", id);
    this.admins = admins;
  }

  displayDepartment(this: ITDepartment): void {
    console.log(`Admins: ${this.admins}`);
  }
}

// this class serves as a singleton
class AccountingDepartment extends Department {
    private static instance: AccountingDepartment; 

  private constructor(id: number, private reports: string[]) {
    super("Accounting", id);
  }

  static getInstance() {
    if (!this.instance) {
        // We can access private ctor
        this.instance = new AccountingDepartment(123, []);
    }
    return this.instance;
  }

  displayDepartment(this: Department): void {
    console.log()
  }
}

class Person {
  private isEmployed: boolean = false;

  constructor(public name: string, public id: number) {
    this.isEmployed = true;
  }

  displayInfo() {}
}

class Employee {
  protected name: string;
  protected email: string;
  protected title: string;
  protected age: number;
  protected company: string;

  constructor(
    name: string,
    email: string,
    title: string,
    age: number,
    company: string
  ) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.age = age;
    this.company = company;
  }

  displayInfo(this: Employee): void {
    console.log(
      `Employee ${this.name}, age: ${this.age}, email: ${this.email}, title: ${this.title}, company: ${this.company}`
    );
  }
}

class SoftwareEngineer extends Employee {
  static year: number = 2024;
  private techStack: string[] = [];
  constructor(
    name: string,
    email: string,
    title: string,
    age: number,
    company: string
  ) {
    super(name, email, title, age, company);
  }

  setTechStack(techStack: string[]): void {
    this.techStack = techStack;
  }

  static newEngineer(
    name: string,
    email: string,
    title: string,
    age: number,
    comapny: string
  ) {
    console.log("Creating SoftwareEnginner() object");
    console.log(SoftwareEngineer.year);
    return new SoftwareEngineer(name, email, title, age, comapny);
  }

  // NOTE: This is the property
  // @property
  get technologies(): string[] {
    return this.techStack;
  }

  set technologies(techStack: string[]) {
    if (!techStack) {
      throw new Error("Empty tech stack");
    }
    this.techStack = techStack;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, tech stack: ${this.techStack}`);
  }
}

const softEnginner = new SoftwareEngineer(
  "Alexey",
  "alexey.yevtushenko@gmail.com",
  "junior generalist programmer",
  24,
  "Ubisfot"
);

softEnginner.technologies = ["C++", "Golang", "Python", "TypeScript"];
softEnginner.displayInfo();

const me = SoftwareEngineer.newEngineer(
  "Alexey",
  "alexey.yevtushenko.work@gmail.com",
  "junior genralist programmer",
  24,
  "Ubisoft"
);

me.displayInfo();

const itDepartment = new ITDepartment(0x4, ["Alexey", "Morgana"]);
itDepartment.addEmployee("Alexey");

const d = AccountingDepartment.getInstance();
console.log();

d.addEmployee("Alexey");
d.addEmployee("Tomasz");

console.log(d.getEmployees());


const p = new Person("Alexey", 23477);
