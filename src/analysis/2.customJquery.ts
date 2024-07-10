interface KQuery<T> {
  text(param?: string | number | boolean | ((this: T, index: number) => string | number | boolean)): this;
  html(param?: string | Document | DocumentFragment): void;
}

const $tag: KQuery<HTMLElement> = $(["p", "t"]) as unknown as KQuery<HTMLElement>; // 테스트용 타입 변환

$tag.text("123");
$tag.text(123);
$tag.text(function (index) {
  console.log(this, index);
  return "hello";
});
$tag.text().html(document);
