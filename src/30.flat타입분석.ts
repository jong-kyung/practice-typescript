const a = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // [1, 2, 3, 1, 2, [1], [2]]
const b = [1, 2, 3, [1, 2], [[1], [2]]].flat(2); // [1, 2, 3, 1, 2, 1, 2]
console.log(a);
// FlatArray<number[] | number[][] | number[][][], 2>
// FlatArray<number | number[] | number[][], 1>
// FlatArray<number | number[], 0>
// FlatArray<number, -1>
// number[]

type FlatArray<Arr, Depth extends number> = {
  done: Arr;
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
    : Arr;
}[Depth extends -1 ? "done" : "recur"];

type A = {
  name: string;
  age: number;
};

type B = A[1 extends number ? "age" : "name"]; // number
