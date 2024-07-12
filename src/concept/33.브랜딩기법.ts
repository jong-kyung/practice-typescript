//* 브랜딩 기법
// 새로운 타입을 만들어내 브랜딩을 통해 타입을 구분하는 방법
type Brand<K, T> = K & { __brand: T };

type Eur = Brand<number, "EUR">;
type USD = Brand<number, "USD">;
type KRW = Brand<number, "KRW">;

// 브랜딩을 사용하는 방법
const usd = 10 as USD;
const eur = 10 as Eur;
const krw = 2000 as KRW;
const bankAccount = 20 as EUR;

function euroToUsd(eur: Eur): number {
  // 브랜딩을 사용했기 때문에 타입이 다르면 에러가 발생한다.
  return eur * 1.18;
}

console.log(`USD:${euroToUsd(eur)}`);

euroToUsd(krw); // 브랜딩 기법을 사용했기 때문에 에러가 발생한다.

euroToUsd(eur); // 1.18
