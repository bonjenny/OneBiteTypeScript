/**
 * 7/9(일)
 * 1-5) TS 컴파일러 옵션 설정
 * https://www.inflearn.com/course/lecture?inst=68d752f7&courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=154361
 * =============================================================
 */

// <<컴파일러 옵션>>
// - 얼마나 엄격하게 타입 오류를 검사할지
// - 자바스크립트 코드 버전은 어떻게 할지

// <<tsc --init>>
// tsconfig 파일이 생성됨

// <<include 옵션>>
// 배열에 적은 경로에 있는 파일들을 컴파일

// <<compilerOptions 옵션>>
// target: 컴파일된 JS의 버전 설정
// - "ESNext": 최신 자바스크립트
//           var func = function () { return console.log("hello"); };
// - "ES5": ES2015 버전 자바스크립트
//          const func = () => console.log("hello");

// <<module 옵션>>
// "CommonJS": 모듈 시스템을 CommonJS로 설정
// "ESNext": 모듈 시스템을 ESNext로 설정
// compilerOptions와 마찬가지로 module 옵션도 중요
// 우리가 이 프로그램을 실행시킬 브라우저가 항상 ES2016을 지원한다고 보장할 수 없기 때문

// <<outDir 옵션>>
// 컴파일 결과 생성될 파일들의 위치 지정

// <<strict 옵션>>
// 엄격한 타입 검사할지 말지 설정하는 옵션
// JS => TS 변환 과정에서는 strict 모드를 간혹 끄기도 함
// 모든 JS에서 빨간줄이 뜰 것이기 때문
