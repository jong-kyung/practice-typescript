//* Object와 {}는 모든 타입(null과 undefined 제외)을 의미한다.
const x: {} = "hello";
const y: Object = "hi";
const xx: object = { hello: "world " };
const z: unknown = "hello";

// unknown = {} | null | undefiend
if (z) {
  z;
} else {
  z;
}
