interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
}

const a: Arr<number> = [1, 2, 3];

a.forEach((item) => {
  console.log(item);
  item.toFixed(1);
});

a.forEach((item) => {
  console.log(item);
  return "3";
});

const b: Arr<string> = ["1", "2", "3"];

b.forEach((item) => {
  console.log(item);
  item.charAt(1);
});

const c: Arr<string | number> = ["1", 2, "3"];
c.forEach((item) => {
  console.log(item);
});
