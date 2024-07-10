const Kim = {
  name: "kim",
  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  },
};
//* 일반적인 bind 사용법 this 바인딩
const sayHello = Kim.sayHello;
const sayHi = Kim.sayHello.bind({ name: "lee" });
sayHi();

type T = ThisParameterType<typeof Kim.sayHello>;
type NoThis = OmitThisParameter<typeof Kim.sayHello>;

//* bind의 또 다른 사용법
function add(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
}

const add1 = add.bind(null);
add1(1, 2, 3, 4, 5, 6);

const add2 = add.bind(null, 1);
add2(2, 3, 4, 5, 6);

const add3 = add.bind(null, 1, 2);
add3(3, 4, 5, 6);

const add4 = add.bind(null, 1, 2, 3);
add4(4, 5, 6);

const add5 = add.bind(null, 1, 2, 3, 4);
add5(5, 6);

const add6 = add.bind(null, 1, 2, 3, 4, 5);
add6(6);
