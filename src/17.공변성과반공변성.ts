//* 리턴타입
function a(x: string): number {
  return +x;
}
a("1"); // 1

type B = (x: string) => number | string;

const b: B = a; // 타입이 다른데 할당이 된다.
// 리턴값은 더 넓은 타입으로 할당할 수 있다.

function c(x: string): number | string {
  return +x;
}
a("1"); // 1

type D = (x: string) => number;
let d: D = c; // 리턴값은 넓은 타입으론 대입이 된다.

//* 매개변수 타입
function a1(x: string | number): number {
  return 0;
}

type B1 = (x: string) => number;
let b1: B1 = a; // 매개변수는 리턴타입과 반대로 좁은 타입으로 할당할 수 있다.
