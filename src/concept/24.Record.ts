interface Obj {
  [key: string]: number;
}

const a: Obj = { a: 1, b: 2, c: 3 };

//* Record는 객체를 만들어준다.
const b: Record<string, number> = { a: 1, b: 2, c: 3 };

type R<T extends keyof any, S> = {
  [key in T]: S;
};
