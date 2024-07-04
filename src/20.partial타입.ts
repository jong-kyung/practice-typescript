interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const kim: Profile = {
  name: "kim",
  age: 20,
  married: false,
};

//* Partial은 모든 속성을 optional로 만들어준다.
const newKim: Partial<Profile> = {
  name: "kim",
  age: 20,
};

//* partial 구현
type P<T> = {
  [Key in keyof T]?: T[Key]; // index signature & mapped type
};
// P<Profile> { name?: string; age?: number; married?: boolean; }
