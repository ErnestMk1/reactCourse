export {};

let message = 'Welcome';

console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'IAmNotGay';
sum = x + y;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Ernest';

let sentence: string = `My name is ${name}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];

const strArr: string[] = ['1', '2', '3'];
const strArr2: Array<string> = ['4', '5', '6'];

console.log(strArr);
console.log(strArr2);

const mixedArr: [string, number] = ['Ernest', 2];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
