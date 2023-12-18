// * 숫자형: number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN; // Not a Number // NaN도 숫자형에 포함됨

// <<안되는 것>>
// num1 = "hello"; // ! string 형식은 number 형식에 할당 불가
// num1.toUpperCase(); // ! 이런 문자열 메서드 사용 불가
num1.toFixed(); // 숫자형 전용 메서드는 사용 가능

// * 문자열형: string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// <<안되는 것>>
// str1.toFixed(); // ! 이런 숫자형 전용 메서드 사용 불가
str1.toUpperCase(); // 문자형 전용 메서드는 사용 가능

// * 참과 거짓: boolean
let bool1: boolean = true;
let bool2: boolean = false;

// * null
let null1: null = null;

// * undefined
let unde1: undefined = undefined;


// ? 보통 자바스크립트에서는, 마땅히 넣을 값이 없는 경우 null을 넣어두기도 하는데,
// ? 타입스크립트에서도 허용될까?

// let numA: number = null; // ! 타입스크립트에서는 null 형식을 number 형식에 할당할 수 없음
// * 그러나 엄격한 null 검사 옵션을 false로 지정하면?
// let numA: number = null; // null 타입도 임시로 넣어줄 수 있음!

// strict는 strictNullChecks의 상위 옵션!
// strict가 켜져 있으면 기본적으로 strictNullChecks도 켜져있을 것


// * 리터럴 타입: 값 그 자체가 타입이 되는 타입
// 리터럴 -> 값 (이라는 뜻)
let numA: 10 = 10; // numA의 타입이 10이라는 값 그 자체가 됨!
let strA: "hello" = "hello";
let boolA: true = true; // ! false를 넣으면 오류!
