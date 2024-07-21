//* declare global은 import나 export를 해주어야 다른 파일에서 사용할 수 있음
//* d.ts 확장자의 파일은 타입 정의 파일로, 타입스크립트 컴파일러가 사용함

declare global {
  interface Error {
    status: number;
  }

  namespace Express {
    export interface User {
      front: string;
    }
  }
}

export {}; // 이 파일이 모듈로 인식되도록 빈 export를 추가합니다.
