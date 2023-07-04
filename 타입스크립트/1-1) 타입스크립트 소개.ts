/**
 * 7/4(화)
 * 1-1) 타입스크립트 소개
 * https://cat-antlion-144.notion.site/4a0af5353d1d42a5ab30fb28cd1931ea?pvs=25
 * =============================================================
 */

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
