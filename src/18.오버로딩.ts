// declare: 함수 타입 정의만 하고 구현은 하지 않음
// 오버로딩을 통해 모든 경우의 수를 정의할 수 있다.
declare function add(x: number, y: number): number;
declare function add(x: string, y: string): string;
declare function add(x: number, y: number, z: number): number;

add(1, 2);
add(1, 2, 3);
add("1", "2");

//* interface에서의 오버로딩
interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const add1: Add = (X, y) => x + y;

//* class에서의 오버로딩
class A {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any) {
    return x + y;
  }
}

const c = new A().add(1, 2);
