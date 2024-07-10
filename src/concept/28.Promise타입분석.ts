const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());
// Promise<number> -> Promise<number> -> Promise<number> -> Promise<string>
const p2 = Promise.resolve(2);
// Promise<number>
const p3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});

//* Awaited<T>는 Promise<T>의 결과값을 반환한다.
type Result = Awaited<Promise<Promise<Promise<number>>>>;
type Result2 = Awaited<{ then(onfulfilled: (v: number) => number): any }>; // thenable

Promise.all([p1, p2, p3]).then((result) => {
  // {'0':string, '1':number, '2':unknown, length:3}
  console.log(result); // ['3', 2, undefined]
});
// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
// T = [p1, p2, p3]
// keyof T = '0' | '1' | '2' | 'length'

const arr = [1, 2, 3] as const;
type Arr = keyof typeof arr;
// const key: Arr = "3";
