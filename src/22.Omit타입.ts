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

//* Exclude는 특정 타입을 제외한 타입을 만들어준다.
type A = Exclude<keyof Profile, "married">;

//* Extract는 특정 타입만 뽑아서 타입을 만들어준다.
type B = Extract<keyof Profile, "married" | "name">;

//* Omit은 특정 속성을 제외한 타입을 만들어준다.
const newKim: Omit<Profile, "married"> = {
  name: "kim",
  age: 20,
};

type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
// S extends keyof any -> S는 string | number | symbol
