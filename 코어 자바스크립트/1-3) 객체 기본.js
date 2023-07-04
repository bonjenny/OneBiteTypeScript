/**
 * 7/3(월)
 * 1-3) 객체 기본
 * https://cat-antlion-144.notion.site/93b817818d234162b1ee4c072b948e35?pvs=25
 * =============================================================
 */



/* 기본 활용 */

// 단축 프로퍼티
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age,  // age: age 와 같음
    // ...
  };
}

// in 연산자 - 프로퍼티 존재 여부 확인
let user = { name: "John", age: 30 };
alert("age" in user); //true

// for...in 반복문 - 객체의 모든 프로퍼티 순회
let user2 = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user2) {
  alert(key);  // name, age, isAdmin
  alert(user2[key]); // John, 30, true
}


/* 참조에 의한 객체 복사 */