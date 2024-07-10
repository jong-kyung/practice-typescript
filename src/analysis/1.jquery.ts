// const $ = "123"; $는 변수이다.
jQuery("p").removeClass("myClass noClass").addClass("yourClass"); // $대신 jQuery를 사용해도 됨.

//* removeClass()분석
// removeClass(className_function?:| string| string[] | ((this: TElement, index: number, className: string) => string),): this;
$("p").removeClass(["myClass", "noClass"]).addClass("yourClass"); // $대신 jQuery를 사용해도 됨.

$("p")
  .removeClass((index, className) => {
    // this가 타입에 선언되어 있을 땐, 타이핑만 해준 것이므로 나머지 매개변수들만 작성해주면 된다.
    return "myClass";
  })
  .addClass("yourClass"); // $대신 jQuery를 사용해도 됨.

const $p = $("p");

$(["p", "t"]).text("hello");
$(["p", "t"]).text(function () {
  console.log(this);
  return "hello";
});

const tag = $("ul li").addClass(function (index) {
  return "item-" + index;
});

const div = document.createElement("div");
div.innerHTML = "hello";
$(tag).html(div);
