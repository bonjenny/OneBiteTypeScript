/**
 * 7/9(일)
 * * 1-5) TS 컴파일러 옵션 설정
 * https://www.inflearn.com/course/lecture?inst=68d752f7&courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=154361
 * =============================================================
 */

// * <<컴파일러 옵션>>
// - 얼마나 엄격하게 타입 오류를 검사할지
// - 자바스크립트 코드 버전은 어떻게 할지

// * <<tsc --init>>
// tsconfig 파일이 생성됨

// * <<include 옵션>>
// 배열에 적은 경로에 있는 파일들을 컴파일

// * <<compilerOptions 옵션>>
// target: 컴파일된 JS의 버전 설정
// - "ESNext": 최신 자바스크립트
//           var func = function () { return console.log("hello"); };
// - "ES5": ES2015 버전 자바스크립트
//          const func = () => console.log("hello");

// * <<module 옵션>>
// "CommonJS": 모듈 시스템을 CommonJS로 설정
// "ESNext": 모듈 시스템을 ESNext로 설정
// compilerOptions와 마찬가지로 module 옵션도 중요
// 우리가 이 프로그램을 실행시킬 브라우저가 항상 ES2016을 지원한다고 보장할 수 없기 때문

// * <<outDir 옵션>>
// 컴파일 결과 생성될 파일들의 위치 지정

// * <<strict 옵션>>
// 엄격한 타입 검사할지 말지 설정하는 옵션
// JS => TS 변환 과정에서는 strict 모드를 간혹 끄기도 함
// 모든 JS에서 빨간줄이 뜰 것이기 때문

// * <<moduleDetection>>
// 블록 범위 변수 'a'를 다시 선언할 수 없습니다.
// JS에서는 파일 각각을 하나의 모듈로 봤지만,
// TS에서는 파일을 모두 전역 모듈로 봄

// * <<해결 방법>>
// 1. export {}: 등의 모듈 키워드가 하나라도 있으면 독립된 모듈로 취급
// 2. moduleDetection 옵션 추가
//   "moduleDetection": "force"

// ? Ctrl + Shift + P
// restart ts server: TS서버 다시 시작, 변경한 옵션 바로 적용

// const a = 1;
// export {}; // 옵션만 추가했을 뿐인데 모듈 키워드가 자동으로 추가됨

// * <<Unexpected token 'export'>>
// node dist/index.js 시 발생

// - package.json
// "type": "module"

// - tsconfig.json
// "ts-node": {
//   "esm": true
// }

// ts-node는 기본적으로 CommonJS 모듈 시스템을 사용하기 때문에
// ESNext의 export 문법을 읽지 못함
// 위 옵션을 설정해주면 읽을 수 있음
