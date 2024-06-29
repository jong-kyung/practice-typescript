//* 제네릭
function badAdd(x: string | number, y: string | number): string | number {
  return x + y;
}
// 의도한 것
badAdd(1, 2); // 3
badAdd("1", "2"); // '12'
// 의도하지 않은 것
badAdd(1, "2"); // '12'
badAdd("1", 2); // '12'

// 제네릭 사용
function add<T extends number, K extends string>(x: T, y: K): T {
  // 보통은 T로 표현하지만 다른 문자도 가능, extends로 타입을 제한
  return x + y; // T가 뭔지 알 수 없어서 에러 발생
}

add(1, 2); // 3
add("1", "2"); // '12'

add(true, false);
add(1, "2"); // '12'
add("1", 2); // '12'

//* 제네릭으로 타입을 제한하는 예시
function x<T extends { a: string }>(x: T): T {
  return x;
}

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol
