class A {
  a: string;
  b: number;

  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }

  method() {}
}

type AA = A; // new A()
const a: A = new A("123");
const b: typeof A = A;

//* private 접근 제어자
class B {
  private a: string = "123"; // 타입스크립트에서 제공하는 private
  #b: number = 123; // 자바스크립트에서 제공하는 private, protected가 사용이 불가능함
}

interface A1 {
  readonly a: string;
  b: string;
}

//* 클래스는 인터페이스를 상속받을 수 있음
abstract class B1 implements A1 {
  private readonly a: string = "hello"; // private은 상속이 불가능
  protected b: string = "world"; // protected는 상속이 가능
  public c: string = "hi"; // public은 생략 가능

  method() {
    console.log(this.a);
  }

  abstract method2(): void;
}

class C1 extends B1 {
  method2(): void {
    console.log(this.b);
    console.log(this.c);
  }
}

new C1().a;
new C1().b;
new C1().c;
// 이런 기능들을 이용하여 자바스크립트를 자바처럼 사용할 수 있다.
