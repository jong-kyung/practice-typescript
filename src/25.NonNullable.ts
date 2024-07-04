type A = string | null | undefined | boolean | number;
//* NonNullable은 null, undefined를 제거해준다.
type B = NonNullable<A>;

type N<T> = T extends null | undefined ? never : T;
