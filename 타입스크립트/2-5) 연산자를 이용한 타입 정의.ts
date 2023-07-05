/**
 * 7/5(수)
 * 2-5) 연산자를 이용한 타입 정의
 * https://cat-antlion-144.notion.site/5662ca3169af42d3a17120c2c9fd14cf?pvs=25
 * =============================================================
 */

// <<Union Type>>
// union 타입은 서로 다른 두 개 이상의 타입들을 사용하여 만드는 것으로,
// 사용된 타입 중 무엇이든 하나를 타입으로 가질 수 있습니다.

function logText(text: string | number) {
  console.log(text);
}

// 숫자와 문자 모두 사용 가능합니다
logText("text");
logText(100);
// logText([1]); // never 형식의 인수는 할당 불가

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log("Hello, " + x.join(" and "));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log("Welcome lone traveler " + x);
  }
}

// <<Intersection Type>>
// intersection 타입은 사용된 타입 모두를 만족하는 타입으로써
// 여러 타입을 하나로 합칩니다

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}

// Person과 Developer의 속성을 모두 가집니다
const someone: Person & Developer = {
  name: "john",
  age: 30,
  skill: "typescript",
};

console.log(someone);
