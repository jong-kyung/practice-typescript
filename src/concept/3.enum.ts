const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

// 객체를 enum처럼 사용하기 const를 사용하면 타입이 강제로 0,1,2,3으로 지정된다.
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

let e1 = EDirection.Up;
let e2 = EDirection.Left;

const obj3 = { a: "123", b: "hello", c: "world" } as const;
type Key = (typeof obj3)[keyof typeof obj3];
/*
typeof obj를 통해 obj의 타입을 가져온다
keyof typeof obj를 통해 obj의 key값을 가져온다
(typeof obj3)[keyof typeof obj3] 를 통해 obj의 value값을 가져온다
*/

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
