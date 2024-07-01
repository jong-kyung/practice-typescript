interface Arr<T> {
  map<S>(callback: (v: T) => S): S[]; // S는 Arr의 타입으로 넣는게 아니라 map에 제네릭을 넣어주어야 한다. -> 어떤 배열이 될지 모르기 때문
}

const a: Arr<number> = [1, 2, 3];
const b = a.map((v) => v + 1); // [2, 3, 4]
const c = a.map((v) => v.toString()); // ["1", "2", "3"]
const d = a.map((v) => v % 2 === 0); // [false, true, false]

const e: Arr<string> = ["1", "2", "3"];
const f = e.map((v) => +v); // [1, 2, 3]
