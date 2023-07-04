/**
 * 7/4(화)
 * 1-7) 객체 프로퍼티 설정
 * =============================================================
 */



/**
 * << 프로퍼티 getter와 setter >>
 * 1. 데이터 프로퍼티: 일반적인 객체의 프로퍼티
 * 2. 접근자 프로퍼티: getter와 setter 함수로 이루어진 프로퍼티.
 *                    외부에서는 일반적인 프로퍼티로 보임.
 */

// 예시 1
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName); // John Smith
user.fullName = "Alice Cooper"; // 주어진 값을 사용해 set fullName이 실행됩니다.

console.log(user.name); // Alice
console.log(user.surname); // Cooper


// 예시 2
let user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
      return;
    }
    this._name = value;
  }
};

user2.name = "Pete";
console.log(user2.name); // Pete

user2.name = ""; // 너무 짧은 이름을 할당하려 함