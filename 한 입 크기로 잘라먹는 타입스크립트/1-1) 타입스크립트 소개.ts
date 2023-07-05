/**
 * 7/5(수)
 * 1-1) 타입스크립트 소개
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=154358&tab=curriculum
 * =============================================================
 */

// <<타입스크립트의 창시자>>
// 엔더스 하일스버그: C#, TypeScript 모두 만들어 두 언어는 비슷하다.

// <<타입스크립트 = 오픈소스>>
// <<타입스크립트의 인기>>: 더는 피할 수 없는 대세, 100명중 89명 사용

// <<타입스크립트 = 자바스크립트의 확장판>>
// 자바스크립트를 더 안전하게 사용할 수 있도록 "타입 관련 기능"을 추가한 것

let a: number = 1;
let b: number = 2;
console.log(a + b);

// <<자스도 이미 잘 나가는데 굳이 타스가 필요할까?>>
// 사실, 자스만 하더라도 가장 인기 있는 프로그래밍 언어 1위
// 타스가 만들어진 이유: 자스가 너무 잘나가서

// <<자스는 원래 아주 간단한 상호작용 정도를 처리하기 위해 만들어짐>>
// 웹 브라우저에서만 실행하면 되니까...
// - 유연한 문법
// - 버그 발생 가능성 높음 (대규모 어플리케이션에선 문제가 됨)
// - 자유로움

// <<Node.js의 등장 이후>>
// - Node.js: 자바스크립트 구동기(런타임)
// - 이제 어디서든 자바스크립트 구동 가능
// - 이제 무엇이든(웹 서버, 모바일/데스크탑 앱) 자바스크립트로 만들 수 있다

// <<복잡한 대규모 어플리케이션을 개발하기 위해선 적합하지 않은 "유연한 문법">>
