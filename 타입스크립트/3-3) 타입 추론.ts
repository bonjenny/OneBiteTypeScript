/**
 * 7/5(수)
 * 3-3) 타입 추론
 * https://cat-antlion-144.notion.site/15a52a81f26a423785078b7e2597a340
 * =============================================================
 */

// <<타입 추론의 기본>>
let x = 3; // x는 number로 추론됩니다

// <<최적 공통 타입>>
// 타입 추론 시, 표현식들의 타입을 이용해 최적 공통 타입을 계산
let y = [0, 1, null]; // (number | null)[] 로 추론

// <<문맥상 타이핑>>
// 문맥상 타이핑은 표현식의 타입이 위치에 의해 암시될 때 발생
// 다음과 같이 동일한 함수더라도 문맥에 따라 다르게 타입을 추론

// window.onmousedown 의 타입으로 매개변수 event 타입을 추론하여 에러가 발생하지 않습니다
window.onmousedown = function (event) {
  // event 형식은 명시적으로 any이지만 형식 유추 가능
  console.log(event.button); //<- OK
};

// window.onscroll 의 타입으로 매개변수 event 타입을 추론하여 에러가 발생합니다
window.onscroll = function (event) {
  // event: any
  console.log(event.button); //<- Error!
};
