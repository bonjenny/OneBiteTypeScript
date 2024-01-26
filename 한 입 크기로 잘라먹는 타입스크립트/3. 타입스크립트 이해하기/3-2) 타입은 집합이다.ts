/**
 * 1/28(일)
 * * 3-2) 타입은 집합이다
 * https://www.inflearn.com/course/lecture?courseSlug=%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&unitId=156630
 * =============================================================
 */

// * <<타입은 집합이다>>
// 집합: 동일한 속성을 갖는 여러 개의 원소, 또는 요소들을 하나로 묶어둔 단위

// * <<number Type>> - 슈퍼타입(부모타입): 다른 타입을 포함하는 큰 타입
// -20, 1, 2, 3, 4, 0.123, 123123, Infinity 등

// * <<number Literal Type>> - 서브타입(자식타입): 다른 타입에 포함되는 타입
// 20
let num: 20 = 20; // number 리터럴 타입은 number 타입의 부분집합이다.

// * <<타입 호환성>> - 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
// Number 타입 <- O -  Number 리터럴 타입
// Number 타입  - X -> Number 리터럴 타입

// 모든 Number 리터럴 타입은 Number 타입이라고 취급해도 괜찮다.
// 하지만 모든 Number 타입을 Number 리터럴 타입이라고 취급하는 것은 곤란하다.

let num1: number = 10;
let num2: 10 = 10;
num1 = num2; // 이건 괜찮다. // * <<업캐스팅>>

let num3 : 10 = 10;
let num4: number = 10;
// num3 = num4; // <<다운캐스팅>> // ! 'number' 형식은 '10' 형식에 할당할 수 없습니다.