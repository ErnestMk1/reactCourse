export {};

let message = 'Welcome';

// console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'IAmNotGay';
sum = x + y;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Ernest';

let sentence: string = `My name is ${name}`;
// console.log(sentence);

let n: null = null;
let u: undefined = undefined;

const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];

const strArr: string[] = ['1', '2', '3'];
const strArr2: Array<string> = ['4', '5', '6'];

// console.log(strArr);
// console.log(strArr2);

const mixedArr: [string, number] = ['Ernest', 2];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
// console.log(c);

let randomValue: any = 10;
randomValue = '10';
randomValue = true;
// console.log(randomValue.name);

let unknownValue: unknown = 10;
unknownValue = 'string';

let multiType: number | boolean;
multiType = 10;
multiType = false;


// functions in TS:

const add = (num1: number, num2: number=0): number => {
  return num1 + num2;
};


interface Person {
  firstName: string;
  lastName?: string;
};

const fullName = (person: Person) => {
  console.log(`${person.firstName} ${person.lastName}`);
};

const p = {
  firstName: 'Ernest',
};

// fullName(p);

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  };

  greet() {
    console.log(`Hi, ${this.employeeName}`);
  };
};

let emp1 = new Employee('Ernest');
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  };

  delegateWork() {
    console.log(`Manager delegating task`);
  };
};

let m1 = new Manager('Maris');
m1.greet();
m1.delegateWork();
