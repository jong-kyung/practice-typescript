//* Constructor Parameters는 클래스의 생성자 함수의 파라미터 타입을 추출해준다.
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

class A {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const a = new A("123", 456, true);
type C = ConstructorParameters<typeof A>; // typeof 클래스가 생성자

type I = InstanceType<typeof A>;

const b: A = new A("123", 456, true); // 인스턴스

//* Instance Type은 클래스의 인스턴스 타입을 추출해준다.
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R
  ? R
  : any;
