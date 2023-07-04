// js: sum 함수
function sum1(a, b) {
  return a + b;
}
sum1("10", "20"); //1020

// ts: sum 함수
function sum2(a: number, b: number) {
  return a + b;
}
// sum2('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.
