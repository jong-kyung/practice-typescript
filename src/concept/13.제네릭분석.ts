/*
제네릭을 분석할 땐 제네릭 자리에 들어갈 타입을 넣어가면서 타입을 추론해보는 것이 중요하다.
*/
interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

//* forEach 제네릭 분석
const num: Array<number> = [1, 2, 3];

num.forEach((item) => {
  console.log(item);
});

["1", "2", "3"].forEach((item) => {
  console.log(item);
});

[true, false, true].forEach((item) => {
  console.log(item);
});

["123", 123, true].forEach((item) => {
  console.log(item);
});

//* map 제네릭 분석
const strings = [1, 2, 3].map((item) => {
  return item.toString();
});

//* filter 제네릭 분석
const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);

const predicate = (value: string | number): value is string => typeof value === "string"; // 타입가드 함수
const filtered2 = ["1", 2, "3", 4, "5"].filter(predicate); // ["1", "3", "5"] string[]
