/**
 * 7/5(수)
 * 1-2) 자바스크립트의 한계점과 타입스크립트
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=154359&tab=curriculum
 * =============================================================
 */

// <<타입 시스템>>
// - 값들을 어떤 기준으로 묶어 타입을 규정할 것인가?
// - 코드의 타입을 언제 검사할지?
// - 어떻게 타입을 검사할지?

// 1) 정적 타입 시스템: 코드 실행 이전 모든 변수의 타입을 고정적으로 결정
// - 모든 변수에 일일이 타입을 지정해주어야 함
// - 타이핑 양 증가
// - 유연하지 못함
//    Ex) C, Java 등

// 2) 동적 타입 시스템: 코드를 실행하고 나서 그때그때 유동적으로 변수 타입을 결정
// - 코드의 타입 오류를 미리 검사할 수 없음
// - 예기치 못한 오류 발생 가능
//    Ex) JS, Python 등

// <<동적 타입 시스템>>
// let a = "hello";
// a = 19970107; // 숫자
// a.toUpperCase(); // 실행이 되어버림
// => 사실 실행이 되기 전에 디버그 중에 멈춰야 함! (실행 오래걸리니까, 치명적이니까)

// <<정적 타입 시스템>>
var a: String = "hello";
var b: Number = 123;
// var c: Number = a * b; // 오류!

// <<점진적 타입 시스템>>
// 모든 변수의 타입을 일일이 지정할 필요 없음
// - 실행 전 검사를 통한 타입 안정성 확보
// - 자동으로 변수의 타입을 추론
let num = 1; // 타입을 지정하지 않았음에도 number 타입이라 인식
// num.toUpperCase(); // 오류
