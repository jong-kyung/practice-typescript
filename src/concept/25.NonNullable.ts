type A = string | null | undefined | boolean | number;
//* NonNullable은 null, undefined를 제거해준다.
type B = NonNullable<A>;

type N<T> = T extends null | undefined ? never : T;

document.querySelector("input")!.id;
// !를 사용하면 null이 아니라고 단언하는 것이다.
