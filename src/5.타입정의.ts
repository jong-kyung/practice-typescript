//* type alias
type A = { a: string };
const a: A = { a: "hello" };

//* interface
// interface는 type alias와 비슷하지만 몇 가지 차이점이 있다.
// interface는 extends나 implements를 사용할 수 있다.
// 주로 객체지향 프로그래밍에서 사용된다.
interface B {
  a: string;
}
const b: B = { a: "hello" };

// 타입에서 확장의 개념으로 사용할 수 있다
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

const kim: Human = { breath: true, breed: true, think: true };

// interface는 extends를 사용하여 확장할 수 있다.
interface Ani {
  breath: true;
}

interface Mam extends Ani {
  breed: true;
}

// type alias를 extends 할 수 있다.
interface Mam2 extends Animal {
  breed: true;
}

const lee: Mam2 = { breath: true, breed: true };

// interface는 같은 이름으로 여러 번 선언할 수 있다.
// 같은 이름으로 여러 번 선언하면 합쳐진다.
// 대부분의 라이브러리는 이러한 방식으로 타입을 제공한다. -> 확장성을 제공하기 위함
interface Action {
  talk: () => void;
}
interface Action {
  eat: () => void;
}
interface Action {
  walk: () => void;
}

// 네이밍 규칙
// 타입을 어떻게 선언했냐에 따라 앞에 붙여준다. 하지만 최근에는 구분하기위한 대문자를 안붙인다. 제네릭에만 사용한다.
interface IAction {}
type TAction = {};
enum EACtion {}
