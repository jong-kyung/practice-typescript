interface Profile {
  name: string;
  age: number;
  married: boolean;
}

//* Required는 모든 속성을 필수로 만들어준다.
const Kim: Required<Profile> = {
  name: "kim",
  age: 20,
  married: false,
};

type R<T> = {
  [Key in keyof T]-?: T[Key];
};
// -? -> optional을 필수로 만들어준다. ? -> optional을 만들어준다.

//* Readonly는 모든 속성을 readonly로 만들어준다.
const newKim: Readonly<Profile> = {
  name: "kim",
  age: 20,
  married: false,
};

type RO<T> = {
  readonly [Key in keyof T]: T[Key];
};
