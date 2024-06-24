//? 변수 선언
//! const 변수는 굳이 타입을 명시하지 않아도 타입스크립트가 알아서 타입을 추론한다.
const a: number = 5; // 변수에 타입을 명시할 수 있다.
const b: string = "5"; // 타입은 소문자로 작성해야함.
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
// const f: symbol = Symbol.for("abc");
// const g: bigint = 128n;
const h: any = true; // any 타입은 모든 타입을 허용한다. any를 사용하면 타입스크립트를 사용하는 의미가 없다.
const g: true = true; // 타입을 명시하면 해당 타입만 사용할 수 있다.

let num = 123;
num = "123" as unknown as number; // 타입 단언을 사용하면 타입을 강제로 지정할 수 있다.

//? 함수 선언
function add1(x: number, y: number): number {
  return x + y;
}

//* 타입 선언
type Add = (x: number, y: number) => number;
// 타입을 지웠을 때도 말이되는 코드여야 한다.
const add2: (x: number, y: number) => number = (x, y) => x + y;
const add3: Add = (x, y) => x + y;

//* 인터페이스 선언
interface IAdd {
  (x: number, y: number): number;
}
const add4: IAdd = (x, y) => x + y;

//* 함수 오버로드
function add5(x: number, y: number): number;
function add5(x, y) {
  return x + y;
}

//? 객체 선언
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

//? 배열 선언
const arr1: string[] = ["1", "2", "3"];
const arr2: Array<number> = [1, 2, 3]; // 제네릭 사용
const arr3: [number, string, number] = [1, "2", 3]; // 튜플 사용
