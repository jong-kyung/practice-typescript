//* 타입가드
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    // 타입가드
    a.split(",");
  } else {
    // number
    a.toFixed(1);
  }
}

numOrStr("123");
numOrStr(1);

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.slice(1);
  } else {
    // number
    a.toFixed(1);
  }
}

//* 클래스 자체의 타입은 typeof 로 확인
class A {
  aaa() {}
}

class B {
  bbb() {}
}

function aOrB(param: A | B) {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
}
aOrB(new A());
aOrB(new B());

//* 객체의 속성을 통한 타입가드
type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: string };
type E = { type: "e"; eee: string };

function typeCheckByValue(a: C | D | E) {
  if (a.type === "c") {
    // 속성을 통한 타입가드
    a.ccc;
  } else if (a.type === "d") {
    a.ddd;
  } else {
    a.eee;
  }
}

function typeCheckByKey(a: C | D | E) {
  if ("ccc" in a) {
    // in 연산자를 통한 타입가드
    a.ccc;
  } else if ("ddd" in a) {
    a.ddd;
  } else {
    a.eee;
  }
}

//* is 연산자를 통한 타입가드
interface Cat {
  meow: number;
}

interface Dog {
  bow: number;
}

// 매개변수가 Dog인지 Cat인지 구분
function catOrDog(a: Cat | Dog): a is Dog {
  // 커스텀 타입가드를 위해 is 연산자 사용
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

const cat: Cat | Dog = { meow: 3 };

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    // 조건문에서 is연산자로 만든 커스텀 타입가드 사용
    console.log(a.bow);
  }

  if ("meow" in a) {
    console.log(a.meow);
  }
}

//* 커스텀 타입가드
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult =>
  input.status === "rejected";
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> =>
  input.status === "fulfilled";

const promises = await Promise.allSettled([Promise.resolve("a"), Promise.resolve("b")]);
const errors = promises.filter(isRejected);

// Promise 실행
// Promise -> Pending -> Settled(Fulfilled, Rejected)
