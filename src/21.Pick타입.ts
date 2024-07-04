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

//* Pick은 특정 속성만 뽑아서 타입을 만들어준다.
const newKim: Pick<Profile, "name" | "age"> = {
  name: "kim",
  age: 20,
};

// 먼저 제네릭에 제한조건을 주는것이 바람직하다.
type P<T, S extends keyof T> = {
  [Key in S]: T[Key];
};
