/**
 * 7/5(수)
 * 3-1) 제네릭
 * https://cat-antlion-144.notion.site/Generics-a0a5574dff0c4167a1f920adcaa4da80
 * =============================================================
 */

// <<제네릭(Generics)>>
// 하나의 타입에 의존하지 않고 타입을 일반화하여
// 여러 타입에서 동작할 수 있도록 하는 방식

// 예제
function getText(text: string | number): string | number {
  return text;
}
const str = getText("hi");
const num = getText(10);
console.log(typeof str, typeof num);

// 개선된 예제
function getText2<T>(text: T): T {
  return text;
}
const str2 = getText2<string>("hi");
const num2 = getText2<number>(10);
console.log(typeof str2, typeof num2);

// 타입 추론
function getText3<T>(text: T): T {
  return text;
}
const str3 = getText3("hi"); // T는 "hi" 로 추론됩니다
const num3 = getText3(10); // T는 10으로 추론됩니다
console.log(typeof str3, typeof num3);

// <<제네릭 타입 변수>>

// 예제
function logText<T>(text: T): T {
  // console.log(text.length); // Error: T doesn't have .length
  return text;
}

// 에러가 발생하지 않는 예제
function logText2<T>(text: T[]): T[] {
  console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
  return text;
}

// <<제네릭 인터페이스>>
// A부터 D까지의 타입은 모두 동일한 타입
function logText3<T>(text: T): T {
  return text;
}

type A = <T>(text: T) => T;
type B = { <T>(text: T): T };
interface C {
  <T>(text: T): T;
}
interface D<T> {
  (text: T): T;
}

// <<제네릭 클래스>>
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}
let math = new GenericMath<number>();
console.log(math);

// <<제네릭 제약 조건>>
interface LengthWise {
  length: number;
}
function logText4<T extends LengthWise>(text: T): T {
  // 제약하기 전에는 에러가 발생하지만 제약하면 에러가 발생하지 않습니다
  console.log(text.length);
  return text;
}
