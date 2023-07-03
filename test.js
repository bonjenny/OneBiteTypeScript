/* ============== 7/3 (월) ============== */








// 2장 숫자

// p.15
var res = (1 / 0) == (1 / -0);
// console.log(res);

// p.17
var num = 1;
var numPlusUnderEpsilon = num + 1.9E-16;
var numPlusEpsilon = num + Number.EPSILON;
console.log(numPlusUnderEpsilon); // Number.EPSILON 보다 작을 경우, 1은 그대로
console.log(numPlusEpsilon);

// p.17
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log((Number.MAX_SAFE_INTEGER + 0.1) + 0.2); // Number.MAX_SAFE_INTEGER 범위를 벗어날 경우, 계산식이 이상해짐
console.log(Number.MAX_SAFE_INTEGER + (0.1 + 0.2)); // Number.MAX_SAFE_INTEGER 범위를 벗어날 경우, 계산식이 이상해짐
console.log(1 + 0.1);

// p.18
// Number.MAX_VALUE에 어떤 양의 정수를 더해도 그 값은 Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1);
console.log(Number.MIN_VALUE);

// p.19
console.log(+"123", typeof (+"123"));
console.log(Number("123"), typeof (Number("123"))); // + 보다 명확한 Number를 사용하자
console.log(-"123", typeof (-"123"));

// p.19 - 나머지 연산자
console.log(-3 / 5);
console.log(-3 % 5);              // -1, remainer: 피제수의 부호를 따름
console.log(-5 % 2);              // -1, remainer: 피제수의 부호를 따름
console.log(((-3 % 5) + 5) % 5);  // 1, modulo: 제수의 부호를 따름