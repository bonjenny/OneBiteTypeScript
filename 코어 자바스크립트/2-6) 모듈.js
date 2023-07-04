/**
 * 7/4(화)
 * 2-6) 모듈
 * https://cat-antlion-144.notion.site/7ff5759f2fd648bc9ca6c8595dfd6a0a
 * =============================================================
 */



/**
 * << 모듈 >>
 * - AMD: 가장 오래된 모듈 시스템 중 하나로 require.js 라는 라이브러리를 통해 개발
 * - CommonJS: Node.js 서버를 위해 만들어진 모듈 시스템
 * - UMD: AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위한 패턴
 */

/**
 * - 모듈 사용 시 자동으로 엄격 모드(use strict)로 실행됨
 * - 모듈은 자신만의 스코프를 가짐
 * - 동일한 모듈이 여러 곳에서 사용되더라도 최초 호출 시 단 한번만 실행됨
 * - 모듈 스크립트는 HTML 문서가 완전히 만들어진 이후에 실행
 */

// ESM: ES Module (모듈 시스템이 자바스크립트 표준으로 등재)
// 📁 sayHi.js
// export function sayHi(user) {
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// 📁 main.js
// import { sayHi } from './2-6) 모듈.js';

console.log(sayHi); // 함수
sayHi('John'); // Hello, John!