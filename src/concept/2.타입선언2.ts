const head1 = document.querySelector("#head")!; // 느낌표(!)를 붙이면 null이나 undefined가 아님을 확신할 때 사용
console.log(head1);

// 최대한 !대신 if를 사용하기
const head2 = document.querySelector("#head");
if (head2) {
  head2.innerHTML = "Hello";
  console.log(head2);
}

let b: String = "hell";
