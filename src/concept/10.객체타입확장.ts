//* Readonly
interface A {
  readonly a: string;
  b: string;
}

const a: A = { a: "hello", b: "world" };
a.a = "123";

//* 인덱스 시그니처
type B1 = { a: string; b: string; c: string; d: string };
type B2 = { [key: string]: string };

//* 맵드 타입
type C1 = "Human" | "Mammal" | "Animal";
type C2 = { [key in C1]: boolean };
type C3 = { [key in C1]: C1 };
const c: C2 = { Human: false, Mammal: true, Animal: true };
