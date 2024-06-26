//* Void
// void타입은 리턴값이 없는 함수에 사용한다.
// void타입에는 undefined만 할당할 수 있다. null은 할당할 수 없다.
function a(callback: () => void): void {
  return undefined;
}

a(() => {
  return 3; // 매개변수의 리턴값을 사용하지 않겠다 라는 의미이다.
});

interface Human {
  // 메서드로
  talk: () => void; // void를 사용하면 이 메서드의 리턴값을 사용하지 않겠다라는 의미이다.
}

const human: Human = {
  talk() {
    return "abc";
  },
};

// 함수의 직접적인 리턴값이 void인 경우 return에 값을 넣으면 에러가 난다
// 매개변수와 메서드에 void를 사용하면 return에 값을 넣을 수 있다.

//* declare 이용 함수 오버로드 변환
declare function forEach(arr: number[], callback: (el: number) => void): void;
let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
// push는 리턴값이 number인데 void선언을 통해 리턴값을 사용하지 않겠다고 선언했기 때문에 에러가 나지 않는다.

const b = human.talk() as unknown as number; // as unknown as number를 사용하면 타입을 강제로 지정할 수 있다.
