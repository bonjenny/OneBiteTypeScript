/**
 * 7/4(화)
 * 2-2) 함수
 * https://cat-antlion-144.notion.site/99730806bf7d47afb3071b5fcbab00c5?pvs=25
 * =============================================================
 */

// << 함수 >>
function sum(a: number, b: number): number {
  return a + b;
}

// << 함수의 인자 >>
sum(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
// sum(10); // error, too few parameters

function sum2(a: number, b?: number): number {
  if (!b) b = 0;
  return a + b;
}
sum2(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
sum2(10); // 타입 에러 없음

function sum3(a: number, b = 100): number {
  return a + b;
}
sum3(10); // 110

// REST 문법이 적용된 매개변수
// accumulator: 이전 루프의 콜백 호출 결과
// currentValue: 현재 루프 돌고 있는 배열의 요소 값
function sum4(a: number, ...nums: number[]): number {
  return nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // 0은 초기값
}
console.log(sum4(1, 1, 2, 3));

// this
// function defer(this: Function, ms: number) {
//   setTimeout(this, ms);
// }

// 오버로드
// - 오버로드 시그니쳐
// - 구현 시그니쳐

function makeDate(timestamp: number): Date; // 오버로드 시그니처
function makeDate(m: number, d: number, y: number): Date; // 오버로드 시그니처
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  // 구현 시그니처
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(12345678, 5, 5);
// const d3 = makeDate(1, 3);

console.log(d1);
console.log(d2);
console.log(d3);

function fn(x: boolean): void;
// function fn(x: string): void;
function fn(x: boolean) {} // (x: string): void 와 호환되지 않습니다
