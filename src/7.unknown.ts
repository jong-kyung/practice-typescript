//* unknown
// any를 사용하는 것보단 unknown을 사용하는 것이 좋다.
// any는 모든 타입을 허용하기 때문에 타입스크립트를 사용하는 의미가 없어진다.
// unknown은 타입을 지정하지 않은 것과 같다.

try {
} catch (error) {
  //   error가 어떤 에러가 나타날지 모르기 때문에 unknown으로 되어 있다.
  (error as Error).message;
}
