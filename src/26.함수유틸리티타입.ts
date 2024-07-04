function zip(x: number, y: string, z: boolean): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

//* Parameters는 함수의 파라미터 타입을 추출해준다.
type Params = Parameters<typeof zip>;

type P<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;
// T extends (...args: any) => any -> T가 함수인지 확인
// T extends (...args: infer A) => any ? A : never; -> infer는 함수의 파라미터를 추론해준다

//* ReturnType은 함수의 반환 타입을 추출해준다.
type Returns = ReturnType<typeof zip>;
type R<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

type Ret = R<typeof zip>;
