//* 유니온 타입
// 두 타입 중 하나를 선택할 수 있다.
function add(x: string | number, y: string | number): string | number {
  return x + y;
}
add(1, 2);
add("1", "2");
add(1, "2");

//* 교차 타입
// 두 타입을 합친다.
// 주로 객체를 합칠 때 사용한다.
type C = { hello: "world" } & { name: "kim" };
const c: C = { hello: "world", name: "kim" };
